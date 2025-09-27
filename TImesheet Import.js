/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 */
define(['N/https', 'N/runtime', 'N/log', 'N/search', 'N/record', 'N/format'],
  function (https, runtime, log, search, record, format) {

    const API_BASE_URL = 'https://tavant.test.digite.com/rest/v2/api/TimesheetService';
    const AUTH_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbnRJZCI6MzUxODk3MDY0LCJleHAiOjE3NjcxMzkxOTksInVzZXJJZCI6IjM1MzEzMjU5MiJ9.JRrjgIoF5e37yMa744lKGulk5V9e5OTAmWf8TbN09CQ';

    function getInputData() {
      return search.create({
        type: "job",
        filters: [
          ["custentity_nimble_project_id", "isnotempty", ""]
        ],
        columns: [
          search.createColumn({ name: "internalid", label: "Internal ID" }),
          search.createColumn({ name: "custentity_nimble_project_id", label: "Nimble Project Id" })
        ]
      });
    }

    function map(context) {
      try {
        const result = JSON.parse(context.value);
        const projectInternalId = result.id;
        const nimbleProjectId = result.values.custentity_nimble_project_id;

        log.debug('Processing Project', {
          internalId: projectInternalId,
          nimbleId: nimbleProjectId
        });

        // Calculate date range (previous week)
        const today = new Date();
        const endDate = new Date(today.setDate(today.getDate() - 1)); // Yesterday
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - 6); // 7 days total

        // Format dates for API
        const formattedStartDate = format.format({
          value: startDate,
          type: format.Type.DATE,
          timezone: format.Timezone.UTC
        }).toUpperCase().replace(/-/g, '-');

        const formattedEndDate = format.format({
          value: endDate,
          type: format.Type.DATE,
          timezone: format.Timezone.UTC
        }).toUpperCase().replace(/-/g, '-');

        // Fetch timesheet data
        const timesheetData = fetchTimesheetData(
          nimbleProjectId,
          formattedStartDate,
          formattedEndDate
        );

        if (timesheetData && timesheetData.Timesheets) {
          timesheetData.Timesheets.forEach(timesheet => {
            context.write({
              key: timesheet.TimesheetId.toString(),
              value: JSON.stringify({
                projectInternalId: projectInternalId,
                timesheetData: timesheet
              })
            });
          });
        }
      } catch (e) {
        log.error('Map Error', e);
      }
    }

    function reduce(context) {
      try {
        const timesheetValues = context.values.map(JSON.parse);
        
        // Process each timesheet
        timesheetValues.forEach(data => {
          createTimeEntries(data.timesheetData);
        });
      } catch (e) {
        log.error('Reduce Error', e);
      }
    }

    function fetchTimesheetData(projectCode, startDate, endDate) {
      const itemTypes = 'ABUG,DFTA_f,GTE_f,PRTK_f,Task_f,TCKT,AUSRST,_f,Pckge';
      const url = `${API_BASE_URL}/getWeeklyTimelogDetailsForProject/${projectCode}/${startDate}/${endDate}/${itemTypes}`;

      const response = https.get({
        url: url,
        headers: {
          'AuthorizationToken': AUTH_TOKEN,
          'Accept': 'application/json'
        }
      });

      if (response.code !== 200) {
        throw new Error(`API Error: ${response.code} - ${response.body}`);
      }

      return JSON.parse(response.body).data;
    }

    /**
     * Creates time entries with only mandatory fields
     */
    function createTimeEntries(timesheetData) {
      try {
        // Find or create employee
        const employeeId = findOrCreateEmployee({
          externalId: timesheetData.UserId.toString(),
          loginId: timesheetData.LoginId,
          name: timesheetData.UserName
        });

        // Get default location (you may need to modify this based on your requirements)
        const defaultLocation = getDefaultLocation();

        // Process each item and time log
        timesheetData.Items.forEach(item => {
          item.TimelogDetails.forEach(timeLog => {
            if (timeLog.ActualHours > 0) {
              // Parse date (format: "Apr-01-2025")
              const dateParts = timeLog.Date.split('-');
              const month = dateParts[0];
              const day = dateParts[1];
              const year = dateParts[2];
              const dateObj = new Date(`${month} ${day}, ${year}`);

              // Create time entry record with only mandatory fields
              const timeEntryRec = record.create({
                type: 'customrecord_time_entry', // Your custom record type
                isDynamic: true
              });

              // Set mandatory fields
              timeEntryRec.setValue({
                fieldId: 'custrecord_employee', // Employee field
                value: employeeId
              });

              timeEntryRec.setValue({
                fieldId: 'custrecord_trandate', // Transaction date field
                value: dateObj
              });

              timeEntryRec.setValue({
                fieldId: 'custrecord_hours', // Hours field
                value: timeLog.ActualHours
              });

              timeEntryRec.setValue({
                fieldId: 'custrecord_location', // Location field
                value: defaultLocation
              });

              // Save the record
              const timeEntryId = timeEntryRec.save();
              log.audit('Created Time Entry', {
                id: timeEntryId,
                employee: employeeId,
                date: dateObj,
                hours: timeLog.ActualHours,
                location: defaultLocation
              });
            }
          });
        });
      } catch (e) {
        log.error('Error creating time entries', e);
        throw e;
      }
    }

    /**
     * Finds or creates an employee in NetSuite
     */
    function findOrCreateEmployee(employeeData) {
      try {
        // Try to find by external ID first
        let employeeSearch = search.create({
          type: 'employee',
          filters: [
            ['custentity_ext_employee_id', 'is', employeeData.externalId]
          ],
          columns: ['internalid']
        });

        let result = employeeSearch.run().getRange(0, 1);
        if (result.length > 0) {
          return result[0].id;
        }

        // Try by login ID (employee ID in NetSuite)
        employeeSearch = search.create({
          type: 'employee',
          filters: [
            ['entityid', 'is', employeeData.loginId]
          ],
          columns: ['internalid']
        });

        result = employeeSearch.run().getRange(0, 1);
        if (result.length > 0) {
          return result[0].id;
        }

        // Create new employee if not found
        const employeeRec = record.create({
          type: 'employee',
          isDynamic: true
        });

        // Parse name (assuming format "Department::Team::Name")
        const nameParts = employeeData.name.split('::');
        const firstName = nameParts.pop() || 'Unknown';
        const lastName = 'Employee';

        employeeRec.setValue({
          fieldId: 'entityid',
          value: employeeData.loginId || employeeData.externalId
        });

        employeeRec.setValue({
          fieldId: 'firstname',
          value: firstName.trim()
        });

        employeeRec.setValue({
          fieldId: 'lastname',
          value: lastName
        });

        employeeRec.setValue({
          fieldId: 'custentity_ext_employee_id',
          value: employeeData.externalId
        });

        return employeeRec.save();
      } catch (e) {
        log.error('Error finding/creating employee', e);
        throw e;
      }
    }

    /**
     * Gets default location ID (modify as needed)
     */
    function getDefaultLocation() {
      // Example: Get the first active location
      const locationSearch = search.create({
        type: 'location',
        filters: [['isinactive', 'is', 'F']],
        columns: ['internalid']
      });

      const result = locationSearch.run().getRange(0, 1);
      if (result.length > 0) {
        return result[0].id;
      }
      throw new Error('No active locations found');
    }

    function summarize(summary) {
      log.audit('Timesheet Integration Complete', {
        'Total Projects Processed': summary.inputSummary.total,
        'Total Timesheets Processed': summary.mapSummary.total,
        'Errors': summary.reduceSummary.errors
      });
    }

    return {
      getInputData: getInputData,
      map: map,
      reduce: reduce,
      summarize: summarize
    };
  });