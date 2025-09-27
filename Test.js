/*****************************************************************************
Name                - SAT|SL21|SUB ESS PR Login Page
Purpose             - This is Login Page for ESS Portal
Created By          - Shrishail Aherwadi
Created Date        - 
Deployed on 	    -
Last Modify Date    - 30-DEC-2024
Modified Description-
 **************************************************************************/
/*****************************************************************************
Script Description     - This script is use for Login the ESS Portal.
Script Type            - Suitelet
Script Version         - 2.1
Script ID              - customscript_sl21_sub_ess_pr_login_page
Script Deployment ID   - customdeploy_sl21_sub_ess_pr_login_page
 *****************************************************************************/
/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(
    ['N/ui/message', 'N/search', 'N/record', 'N/ui/serverWidget', 'N/file', 'N/encode', 'N/format', 'N/config', 'N/xml', 'N/render', 'N/https', 'N/runtime', 'N/url', 'N/redirect', 'N/ui/dialog', 'N/file', 'N/crypto'],
    function (message, search, record, serverWidget, fileModule, encode, format, config, xmlModule, render, https, runtime, url, redirect, dialog, file, crypto) {
        function showAlert(messageText) {
            var myMessage = message.create({
                title: "Invalid Input",
                message: messageText,
                type: message.Type.ERROR
            });
            myMessage.show();
        }

        function getBrowserName(userAgent) {
            var browserPatterns = [{
                name: 'Microsoft Edge',
                pattern: /Edg/
            }, {
                name: 'Internet Explorer',
                pattern: /MSIE|Trident/
            }, {
                name: 'Mozilla Firefox',
                pattern: /Firefox/
            }, {
                name: 'Google Chrome',
                pattern: /Chrome/
            }, {
                name: 'Apple Safari',
                pattern: /Safari/
            }, {
                name: 'Opera',
                pattern: /OPR/
            }
            ];
            for (var i = 0; i < browserPatterns.length; i++) {
                if (browserPatterns[i].pattern.test(userAgent)) {
                    return browserPatterns[i].name;
                }
            }
            return 'Unknown Browser';
        }
        function onRequest(context) {
            var request = context.request;
            /*-----------------company logo-----------------------*/
            var folderSearchObj1 = search.create({
                type: "folder",
                filters:
                    [
                        ["file.name", "haskeywords", "Subex Logo for ESS"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "internalid",
                            label: "Internal ID"
                        }),
                        search.createColumn({
                            name: "name",
                            label: "Name"
                        }),
                        search.createColumn({
                            name: "name",
                            join: "file",
                            label: "Name"
                        }),
                        search.createColumn({
                            name: "url",
                            join: "file",
                            label: "URL"
                        })
                    ]
            });
            var result1 = new Array();
            var start = 0;
            var end = 50;
            var searchData = folderSearchObj1.run().getRange(start, start + end);
            //log.debug('searchData', searchData);
            // log.debug('length', searchData.length);
            for (var i = 0; i < searchData.length; i++) {
                var _folderID = searchData[i].getValue(searchData[i].columns[0]);

                var fileName = searchData[i].getValue(searchData[i].columns[1]);

                log.debug("fileName", fileName);

                var companyLogourl = searchData[i].getValue(searchData[i].columns[3]);
                log.debug("companyLogourl", companyLogourl);
            }

            var accountNo = runtime.accountId.replace("_", "-");
            var text1 = "https://" + accountNo + ".app.netsuite.com";
            var CompanyLogoURLFinal = text1.concat(companyLogourl);
            log.debug("CompanyLogoURLFinal", CompanyLogoURLFinal);
            //***************************Side Image Forlder Search for ESS********************//
            var folderSearchObjforSideImg = search.create({
                type: "folder",
                filters:
                    [
                        ["file.name", "haskeywords", "SAT|ESS Side Image"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "internalid",
                            label: "Internal ID"
                        }),   //0
                        search.createColumn({
                            name: "name",
                            label: "Name"
                        }),   //01
                        search.createColumn({
                            name: "name",
                            join: "file",
                            label: "Name"
                        }),   //02
                        search.createColumn({
                            name: "url",
                            join: "file",
                            label: "URL"
                        })   //03
                    ]
            });
            var result1 = new Array();
            var start = 0;
            var end = 10;
            var searchData = folderSearchObjforSideImg.run().getRange(start, start + end);
            //log.debug('searchData', searchData);
            // log.debug('length', searchData.length);
            for (var i = 0; i < searchData.length; i++) {
                var _folderID = searchData[i].getValue(searchData[i].columns[0]);
                //log.debug("_folderID", _folderID);
                var FolderName = searchData[i].getValue(searchData[i].columns[1]);
                // log.debug("FolderName", FolderName);
                var subexSideImgName = searchData[i].getValue(searchData[i].columns[2]);
                //  log.debug("subexSideImgName", subexSideImgName);
                var essSideImg = searchData[i].getValue(searchData[i].columns[3]);
                //	log.debug("essSideImg", essSideImg);
            }
            /*--------------------------------Background Image----------------------------*/
            var folderSearchObj1 = search.create({
                type: "folder",
                filters:
                    [
                        ["file.name", "haskeywords", "hrportalbackground"]
                    ],
                columns:
                    [
                        search.createColumn({
                            name: "internalid",
                            label: "Internal ID"
                        }),
                        search.createColumn({
                            name: "name",
                            label: "Name"
                        }),
                        search.createColumn({
                            name: "name",
                            join: "file",
                            label: "Name"
                        }),
                        search.createColumn({
                            name: "url",
                            join: "file",
                            label: "URL"
                        })
                    ]
            });
            var result1 = new Array();
            var start = 0;
            var end = 10;
            var searchData = folderSearchObj1.run().getRange(start, start + end);
            //  log.debug('searchData', searchData);
            // log.debug('length', searchData.length);
            for (var i = 0; i < searchData.length; i++) {
                var _folderID = searchData[i].getValue(searchData[i].columns[0]);
                log.debug('_folderID', _folderID);
                var fileName = searchData[i].getValue(searchData[i].columns[1]);
                log.debug('fileName', fileName);
                var backgroundfileurl = searchData[i].getValue(searchData[i].columns[3]);
                log.debug('backgroundfileurl', backgroundfileurl);
            }
            var configRecObj = config.load({
                type: config.Type.COMPANY_INFORMATION
            });
            var companyUrl = configRecObj.getValue({
                fieldId: 'formlogo'
            });
            // log.debug("companyUrl", companyUrl);
            var companyLogourl1 = fileModule.load({
                id: companyUrl
            });
            // log.debug("companyLogourl", companyLogourl);
            if (context.request.method == 'GET') {
                var loginPage = url.resolveScript({
                    scriptId: 'customscript_sl21_sub_ess_pr_login_page',
                    deploymentId: 'customdeploy_sl21_sub_ess_pr_login_page',
                    returnExternalUrl: true

                });
                var forgotpass = url.resolveScript({
                    scriptId: 'customscript_sl21_sub_ess_pr_forgot_pwd',
                    deploymentId: 'customdeploy_sl21_sub_ess_pr_forgot_pwd',
                    returnExternalUrl: true
                });

                var userAgent = context.request.headers['User-Agent'];
                var browserName = getBrowserName(userAgent);
                log.debug('userAgent:', browserName);

                var html = '<DOCTYPE html>' +
                    '<html lang="en">' +
                    '<head>' +
                    '<meta charset="UTF-8">' +
                    '<meta name="viewport" content="width=1024">' +
                    '<title>ESS Login</title>' +
                    '<style>' +
                    '* {' +
                    'margin: 0;' +
                    'padding: 0;' +
                    'box-sizing: border-box;' +
                    '}' +
                    'body {' +
                    'font-family: Arial, sans-serif;' +
                    'background-color: #f7f7f7;' +
                    '}' +
                    '.container {' +
                    'display: flex;' +
                    'height: 100vh;' +
                    'width: 100%;' +
                    'position: relative;' +
                    '}' +
                    '.left-panel {' +
                    'width: 50%;' +
                    'background-color: whitesmoke;' +
                    'display: flex;' +
                    'flex-direction: column;' +
                    'align-items: center;' +
                    'justify-content: center; ' +
                    'padding: 20px;' +
                    'height: 100vh;' +
                    'position: relative;' +
                    '}' +
                    // '.left-panel img.logo {' +
                    // 'position: absolute;' +
                    // 'top: 10px;' +
                    // 'left: 10px;' +
                    // 'width: 200px;' +
                    // '}' +
                    '.left-panel h1 {' +
                    'color: #008dc8;;' +
                    'font-size: 36px;' +
                    //'margin-top: 100px;' +
                    'font-weight: bold;' +
                    '}' +
                    '.login-form {' +
                    'width: 343px;' +
                    'margin-top: 20px;' +
                    '}' +
                    '.login-form h2 {' +
                    'color: #403c3c;' +
                    'font-size: 16px;' +
                    'margin-bottom: 0px;' +
                    '}' +
                    '.login-form input {' +
                    'width: 100%;' +
                    'padding: 10px;' +
                    'margin: 10px 0;' +
                    'border-radius: 5px;' +
                    'font-size: 14px;' +
                    '}' +
                    '.login-form button {' +
                    'width: 100%;' +
                    'padding: 10px;' +
                    'background-color: #008dc8;' +
                    'border: none;' +
                    'border-radius: 5px;' +
                    'font-size: 18px;' +
                    'color: white;' +
                    'cursor: pointer;' +
                    '}' +
                    '.login-form a {' +
                    'color: white;' +
                    'text-decoration: none;' +
                    'display: block;' +
                    'text-align: center;' +
                    'margin-top: 10px;' +
                    '}' +
                    '.right-panel {' +
                    'width: 50%;' +
                    'background-color: white;' +
                    'display: flex;' +
                    'flex-direction: column;' +
                    'justify-content: flex-start;' +
                    'text-align: center;' +
                    'padding: 2px;' +
                    'position: relative;' +
                    '}' +
                    '.right-panel h2 {' +
                    'font-size: 30px;' +
                    'color: black;' +
                    'margin-bottom: 10px;' +
                    '}' +
                    '.right-panel p {' +
                    'font-size: 16px;' +
                    'color: #333;' +
                    '}' +
                    '.right-panel img.vendor-portal {' +
                    'width: 100%;' +
                    'height: 100%;' +
                    'object-fit: cover;' +
                    '}' +
                    '.container {' +
                    'display: flex;' +
                    'justify-content: space-between;' +
                    '}' +
                    '.left-panel, .right-panel {' +
                    'width: 50%;' +
                    '}' +
                    '.logo-container {' +
                    ' display: flex;' +
                    'flex-direction: column;' +
                    'align-items: center;' +
                    'justify-content: center;' +
                    'text-align: center;' +
                    'width: 100%;' +
                    'margin-top: 20px;' +
                    '}' +
                    '.logo {' +
                    'width: 200px;' +
                    'height: auto;' + /* Maintain aspect ratio */
                    'margin-bottom: 10px;' +/* Space between logo and heading */
                    '}' +
                    'h1 {' +
                    'margin: 0;' + /* Remove default margin */
                    'padding-top: 10px;' + /* Space between logo and heading */
                    '}' +
                    '.login-form {' +
                    'display: block;' +
                    'flex-direction: column;' +
                    'gap: 5px;' +
                    'padding: 25px;' +
                    'background: white;' +
                    'border-radius: 12px;' +
                    'box-shadow: 0 0 10px 12px rgba(0, 0, 0, 0.1);' +
                    'border: solid white;' +
                    '}' +
                    '.email-container, .password-container, .button-container, .links-container {' +
                    'margin-bottom: 10px;' +
                    '}' +
                    '.button-container button {' +
                    'width: 100%;' +
                    'padding: 10px;' +
                    '}' +
                    '.links-container a {' +
                    'display: block;' +
                    'margin: 5px 0;' +
                    'color: #008dc8;' +
                    'text-decoration: none;' +
                    '}' +
                    '.vendor-portal {' +
                    'width: 100%;' +
                    '}' +
                    '</style>' +
                    '<script>' +
                    'function togglePasswordVisibility() {' +
                    'var passwordInput = document.getElementById("Pass");' +
                    'var showPasswordCheckbox = document.getElementById("showPassword");' +
                    'if (showPasswordCheckbox.checked) {' +
                    'passwordInput.type = "text";' +
                    '} else {' +
                    'passwordInput.type = "Password";' +
                    '}' +
                    '}';
                html += ` let uniqueId = localStorage.getItem('session_id');
        if (!uniqueId) {
            uniqueId = Math.random().toString(36).substr(2, 9);
            localStorage.setItem('session_id', uniqueId);
        }
        // Display the Unique ID on the page
        document.addEventListener('DOMContentLoaded', function () {
            document.getElementById('uniqueIdInput').value = uniqueId; // Set the hidden input field value
        });
        console.log("uniqueId", uniqueId);`
                html += '</script>' +
                    '</head>' +
                    '<form id="myForm" action="' + loginPage + '" method="POST"  enctype= multipart/form-data autocomplete="off">' +
                    '<body>' +
                    '<div class="container">' +
                    '<!-- Left Panel -->' +
                    '<div class="left-panel">' +
                    '<div class="logo-container">' +
                    '<img class="logo" src="' + CompanyLogoURLFinal + '" alt="S Logo">' +
                    '<h1>ESS Portal Login</h1>' +
                    '</div>' +
                    '<div class="login-form">' +
                    '<div class="email-container">' +
                    '<h2>Login ID</h2>' +
                    '<input type="text" id="Uname" name="Uname" placeholder="Enter Login ID" autocomplete="off" required>' +
                    '</div>' +
                    '<div class="password-container">' +
                    '<h2>Password</h2>' +
                    '<input type="password" id="Pass" name="Pass" placeholder="Enter password" autocomplete="off" required>' +
                    '</div>' +
                    '<input type="checkbox" id ="showPassword"  onclick= "togglePasswordVisibility()" style="width:5%;">' +
                    '<label for="showPassword" style="Color:gray;padding: 7px;">Show Password</label>' +
                    '<div class="button-container">' +
                    '<button type="submit" id="loginButton">Login</button>' +
                    '</div>' +
                    '<div class="links-container">' +
                    '<a href="' + forgotpass + '">Forgot Password/Create Password?</a>' +
                    '</div>' +
                    '<input type="hidden" id="uniqueIdInput" name="uniqueIdInput" >' +
                    '<input type="hidden" id="browserName" name="browserName">' +
                    '<script>document.getElementById("browserName").value = "' + browserName + '";</script>' +
                    '</div>' +
                    '</div>' +
                    '<!-- Right Panel -->' +
                    '<div class="right-panel">' +
                    '<!-- Right panel content like illustration or text -->' +
                    '<img class="vendor-portal" src="' + essSideImg + '" alt="ESS Portal Illustration">' +
                    '</div>' +
                    '</div>' +
                    '</body>' +
                    '</html>';
                context.response.write(html);
            } else {



                var Uname = context.request.parameters.Uname;
                log.debug("Uname", Uname);

                var browserName = context.request.parameters.browserName;
                log.debug("browserName in POST", browserName);
                var uniqueIdInput = context.request.parameters.uniqueIdInput;
                log.debug("uniqueIdInput", uniqueIdInput);
                var Pass = context.request.parameters.Pass;
                log.debug("Pass", Pass);
                var FirstloginUrl = url.resolveScript({
                    scriptId: 'customscript_sl21_sub_ess_pr_login_page',
                    deploymentId: 'customdeploy_sl21_sub_ess_pr_login_page',
                    returnExternalUrl: true
                });

                var employeeSearchObj = search.create({
                    type: "employee",
                    filters: [["custentity_employee_code", "is", Uname]
                    ],
                    columns: [
                        search.createColumn({ name: "internalid", label: "Internal ID" }),  //0
                        search.createColumn({ name: "entityid", label: "Name" }),  //1
                        search.createColumn({ name: "email", label: "Email" }),  //2
                        search.createColumn({ name: "custentity_employee_code", label: "Employee Code" }),  //3
                        search.createColumn({ name: "custentity_ess_portal_access", label: "ESS Portal Access" })  //4
                    ]
                });
                var results = employeeSearchObj.run().getRange({ start: 0, end: 1000 });
                log.debug("results", results);
                if (!results || results.length === 0) {
                    log.debug("Validation Failed", "No employee found with the given Uname.");
                    context.response.write('<script>alert("Invalid Username. Please try again!"); window.history.back();</script>');
                    return;
                }
                var Employee_email = results[0].getValue(results[0].columns[2]);
                var Employee_InternalId = results[0].getValue(results[0].columns[0]);
                var ESSPortal_Access = results[0].getValue(results[0].columns[4]);

                if (ESSPortal_Access != true) {
                    log.debug("Validation Failed", "No employee found with the given Uname.");
                    context.response.write('<script>alert("You do not have access to the portal, please contact your administrator!"); window.history.back();</script>');
                    return;
                }



                var _EmployeeRecord = record.load({
                    type: 'employee',
                    id: Employee_InternalId
                    //isDynamic: true
                });
                var employee_currentcode = _EmployeeRecord.getValue({
                    fieldId: 'custentity_employee_code'

                });

                var employee_isInActive = _EmployeeRecord.getValue({
                    fieldId: 'isinactive'
                });
                log.debug("employee_isInActive", employee_isInActive);

                var email = _EmployeeRecord.getValue({
                    fieldId: 'email'
                });

                var ValidatePassword;
                var options = {
                    recordType: record.Type.EMPLOYEE,
                    recordId: parseInt(Employee_InternalId),
                    fieldId: 'custentity_ess_portal_password',
                    value: Pass
                };
                if (crypto.checkPasswordField(options)) {
                    ValidatePassword = true;
                } else {
                    ValidatePassword = false;
                }

                if (ValidatePassword == false) {
                    log.debug("Validation Failed", "No employee found with the given Uname.");
                    context.response.write('<script>alert("Invalid password. Please try again!"); window.history.back();</script>');
                    return;
                }
                if (employee_isInActive == true) {
                    log.debug("employee_isInActive");
                    context.response.write('<script>alert("Your Employee is Inactive!"); window.history.back();</script>');
                    return;
                }

                log.debug('employee_currentcode', employee_currentcode);

                var PoratalAccess = _EmployeeRecord.getValue({
                    fieldId: 'custentity_ess_portal_access'

                });
                if (results != '' && results != null) {
                    // Handle numeric employee code
                    if (/^\d+$/.test(Uname)) {
                        log.debug("Processing with number Uname", Uname);
                    }
                    // Handle email login
                    else if (Uname.includes('@') || Uname.includes('.com')) {
                        var employeeSearchObj = search.create({
                            type: "employee",
                            filters: [
                                ["email", "is", Uname],
                                "AND",
                                ["isinactive", "is", "F"]
                            ],
                            columns: [
                                search.createColumn({ name: "internalid", label: "Internal ID" }),
                                search.createColumn({ name: "entityid", label: "Name" }),
                                search.createColumn({ name: "email", label: "Email" }),
                                search.createColumn({ name: "custentity_employee_code", label: "Employee Code" }),
                                search.createColumn({ name: "custentity_ess_portal_access", label: "ESS Portal Access" })
                            ]
                        });

                        var emailResults = employeeSearchObj.run().getRange({ start: 0, end: 1 });

                        if (emailResults.length > 0) {
                            var Employee_Code = emailResults[0].getValue("custentity_employee_code");
                            Employee_email = emailResults[0].getValue("email");
                            Employee_InternalId = emailResults[0].getId();

                            if (Employee_Code) {
                                Uname = Employee_Code;
                                log.debug("Updated Uname with Employee Code", Uname);

                                // Reload employee record with the employee code
                                _EmployeeRecord = record.load({
                                    type: 'employee',
                                    id: Employee_InternalId
                                });
                                employee_currentcode = _EmployeeRecord.getValue('custentity_employee_code');
                                PoratalAccess = _EmployeeRecord.getValue('custentity_ess_portal_access');
                            }
                        } else {
                            context.response.write('<script>alert("No employee found with this email address!"); window.history.back();</script>');
                            return;
                        }
                    } else {
                        context.response.write('<script>alert("Please enter a valid employee code or email address"); window.history.back();</script>');
                        return;
                    }

                    // Main validation after handling both cases
                    if (employee_currentcode == Uname && ValidatePassword == true && PoratalAccess == true) {
                        // Generate OTP and create record
                        const digits = '123456789';
                        let otp = '';
                        for (let i = 0; i < 6; i++) {
                            const randomIndex = Math.floor(Math.random() * digits.length);
                            otp += digits[randomIndex];
                        }
                        var ValidatePassword;
                        var options = {
                            recordType: record.Type.EMPLOYEE,
                            recordId: parseInt(Employee_InternalId),
                            fieldId: 'custentity_ess_portal_password',
                            value: Pass
                        };
                        if (crypto.checkPasswordField(options)) {
                            ValidatePassword = true;
                        } else {
                            ValidatePassword = false;
                        }
                        var employeeOtp = record.create({
                            type: 'customrecord_ess_pr_login_otp',
                            isDynamic: true
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_otp_login_id',
                            value: Uname
                        });

                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_otp_email_id',
                            value: Employee_email
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_otp_name',
                            value: Employee_InternalId // vendorIdVal
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_login_otp',
                            value: otp
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_otp_login_status',
                            value: "Login"
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_otp_session_id',
                            value: uniqueIdInput
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_employee_current_browser_name',
                            value: browserName
                        });
                        employeeOtp.setValue({
                            fieldId: 'custrecord_otp_employee_portal_pass',
                            value: Pass
                        });
                        var recordId = employeeOtp.save();
                        log.debug('recordId', recordId);



                        var customrecord_ess_pr_login_otpSearchObj = search.create({
                            type: "customrecord_ess_pr_login_otp",
                            filters:
                                [
                                    ["custrecord_employee_otp_login_id", "is", Uname]
                                ],
                            columns:
                                [
                                    search.createColumn({ name: "id", label: "ID" }),   //0
                                    search.createColumn({ name: "custrecord_employee_otp_name", label: "Employee Name" }), //1
                                    search.createColumn({ name: "custrecord_employee_otp_email_id", label: "Employee Email Id" }),  //2
                                    search.createColumn({ name: "custrecord_employee_login_otp", label: "Employee Login OTP" }),  //3
                                    search.createColumn({ name: "custrecord_employee_current_browser_name", label: "Employee Current Browser Name" }),  //4
                                    search.createColumn({ name: "custrecord_employee_otp_session_id", label: "Employee Session ID" }),  //5
                                    search.createColumn({ name: "custrecord_otp_employee_contact_user", label: "Employee Contact User" })  //6
                                ]
                        });
                        var results = customrecord_ess_pr_login_otpSearchObj.run().getRange({ start: 0, end: 1000 });
                        if (results.length > 0) {
                            var lastIndex = results.length - 1;  // Get the last index
                            var Employee_Otp = results[lastIndex].getValue({ name: "custrecord_employee_login_otp" });
                            log.debug("Last Employee_Otp", Employee_Otp);
                        } else {
                            log.debug("No records found");
                        }

                        log.debug('Starting script deployment checks');
                        var deploymentChecks = {
                            portalValidation: checkScriptDeployment('customdeploy_sat_ue_portal_validation'),
                            portalManagement: checkScriptDeployment('customdeploy_portal_management_details'),
                            accessManagement: checkScriptDeployment('customdeploy__portal_access_management'),
                            portalAccess: checkScriptDeployment('customdeploy_saturo_portal_access_manage')
                        };

                        log.debug('Script Deployment Check Results:', deploymentChecks);

                        var allDeploymentsValid = (
                            deploymentChecks.portalValidation &&
                            deploymentChecks.portalManagement &&
                            deploymentChecks.accessManagement &&
                            deploymentChecks.portalAccess
                        );

                        if (!allDeploymentsValid) {
                            log.error('Deployment Validation Failed - Details:', deploymentChecks);

                            var errorMessage = '⚠ Service Disruption';
                            var errorDetailsHtml = '<div class="details"><div class="detail-item"><strong>System Components Not Available:</strong></div>';

                            if (!deploymentChecks.portalValidation) {
                                errorDetailsHtml += '<div class="detail-item">⚠ Portal Validation Service is currently unavailable.</div>';
                            }
                            if (!deploymentChecks.portalManagement) {
                                errorDetailsHtml += '<div class="detail-item">⚠ Portal Management Service is currently unavailable</div>';
                            }
                            if (!deploymentChecks.accessManagement) {
                                errorDetailsHtml += '<div class="detail-item">⚠ Access Management Service is currently unavailable</div>';
                            }
                            if (!deploymentChecks.portalAccess) {
                                errorDetailsHtml += '<div class="detail-item">⚠ Portal Access Service is currently unavailable</div>';
                            }

                            errorDetailsHtml += '</div>';

                            var html = '<!DOCTYPE html><html><head><title>' + errorMessage + '</title><style>' +
                                'body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }' +
                                'h1 { color: #d9534f; }' +
                                '.details { margin: 20px auto; max-width: 600px; text-align: left; background: #f8f9fa; padding: 15px; border-radius: 5px; }' +
                                '.detail-item { margin-bottom: 10px; }' +
                                'a { color: #337ab7; text-decoration: none; }' +
                                '.contact { margin-top: 20px; font-style: italic; color: #6c757d; }' +
                                '</style></head><body>' +
                                '<h1>' + errorMessage + '</h1>' +
                                errorDetailsHtml +
                                '<div class="contact">Please try again later or contact support if the issue persists</div>' +
                                '<p><a href="' + FirstloginUrl + '">Return to Login</a></p>' +
                                '</body></html>';

                            context.response.write(html);
                        }

                        log.debug('Starting PR Portal license validation');
                        var licenseValidation = validatePRPortalLicense(Employee_InternalId);
                        log.debug('PR Portal License Validation Result:', licenseValidation);

                        if (!licenseValidation.isValid) {
                            var errorDetails = {
                                licenseValidation: licenseValidation.details
                            };

                            log.error('License Validation Failed - Details:', errorDetails);

                            var activationDate = licenseValidation.details.activationDate ? new Date(licenseValidation.details.activationDate).toDateString() : 'Not set';
                            var expirationDate = licenseValidation.details.expirationDate ? new Date(licenseValidation.details.expirationDate).toDateString() : 'Not set';

                            var errorMessage = 'Access Denied';
                            var errorDetailsHtml = '<div class="details"><div class="detail-item"><strong>Validation Details:</strong></div>';

                            if (!licenseValidation.details.isCorrectPortalType) {
                                errorMessage = 'Invalid Portal Access';
                                errorDetailsHtml += '<div class="detail-item">✗ You do not have access to the PR Portal</div>';
                            }
                            if (!licenseValidation.details.isActiveStatus) {
                                errorMessage = 'Account Not Active';
                                errorDetailsHtml += '<div class="detail-item">✗ Your portal access is not currently active</div>';
                            }
                            if (!licenseValidation.details.isActivated) {
                                errorMessage = 'Access Not Yet Activated';
                                errorDetailsHtml += '<div class="detail-item">✗ Your access will be active starting: ' + activationDate + '</div>';
                            }
                            if (!licenseValidation.details.isNotExpired) {
                                errorMessage = 'Access Expired';
                                var expirationDisplay = licenseValidation.details.expirationDate
                                    ? new Date(licenseValidation.details.expirationDate).toDateString()
                                    : 'Not set';
                                errorDetailsHtml += '<div class="detail-item">✗ Your access expired on: ' + expirationDisplay + '</div>';
                            }
                            if (!licenseValidation.details.hasAccess) {
                                errorMessage = 'Insufficient Portal Access';
                                if (licenseValidation.details.accessCount <= 0) {
                                    errorDetailsHtml += '<div class="detail-item">✗ No portal access licenses available<br>✗ Available Purchase Access (' + licenseValidation.details.accessCount + ')</div>';
                                } else {
                                    errorDetailsHtml += '<div class="detail-item">✗ Available Purchase Access (' + licenseValidation.details.accessCount +
                                        ') are less than employee count (' + licenseValidation.details.employeeCount + ')</div>';
                                }
                            }

                            errorDetailsHtml += '</div>';

                            log.debug('Preparing error response with message: ' + errorMessage);
                            var html = '<!DOCTYPE html><html><head><title>' + errorMessage + '</title><style>' +
                                'body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }' +
                                'h1 { color: #d9534f; }' +
                                '.details { margin: 20px auto; max-width: 600px; text-align: left; background: #f8f9fa; padding: 15px; border-radius: 5px; }' +
                                '.detail-item { margin-bottom: 10px; }' +
                                'a { color: #337ab7; text-decoration: none; }' +
                                '.contact { margin-top: 20px; font-style: italic; color: #6c757d; }' +
                                '</style></head><body>' +
                                '<h1>' + errorMessage + '</h1>' +
                                errorDetailsHtml +
                                '<div class="contact">Please contact support</div>' +
                                '<p><a href="' + FirstloginUrl + '">Return to Login</a></p>' +
                                '</body></html>';

                            context.response.write(html);;
                        }


                        var suiteUrl = url.resolveScript({
                            scriptId: 'customscript_sl21_sub_ess_pr_otp',
                            deploymentId: 'customdeploy_sl21_sub_ess_pr_otp',
                            returnExternalUrl: true,
                            params: {
                                'Uname': Uname,
                                'Pass': Pass,
                            }
                        });
                        redirect.redirect({ url: suiteUrl });
                    } else {
                        context.response.write('<script>alert("Invalid credentials or portal access!"); window.history.back();</script>');
                        return;
                    }
                }

            }
        }



        function validatePRPortalLicense(employeeId) {
            try {
                log.audit({
                    title: 'PR Portal License Validation - Starting',
                    details: 'Validating PR Portal license for employee: ' + employeeId
                });


                log.debug('Creating portal access search for employee: ' + employeeId);
                log.debug('Creating portal access search for employee: ' + employeeId);
                var customrecord_saturo_portal_acces_managemSearchObj = search.create({
                    type: "customrecord_saturo_portal_acces_managem",
                    filters: [
                        // ["CUSTRECORD_PARENT_RECORD_LINK.custrecord_employee_link", "anyof", employeeId],
                        // "AND",
                        ["CUSTRECORD_PARENT_RECORD_LINK.custrecord_portal_type", "is", "2"] // Filtering for PR Portal
                    ],
                    columns: [
                        search.createColumn({
                            name: "custrecord_activations_date",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Activation Date"
                        }),
                        search.createColumn({
                            name: "custrecord_expirations_date",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Expiration Date"
                        }),
                        search.createColumn({
                            name: "custrecord_portal_type",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Portal Type"
                        }),
                        search.createColumn({
                            name: "custrecord_purchased_access_count",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Purchased Access Count"
                        }),
                        search.createColumn({
                            name: "custrecord_purchase_requisition_portal",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Status"
                        }),
                        search.createColumn({
                            name: "internalid",
                            join: "CUSTRECORD_PARENT_RECORD_LINK",
                            label: "Internal ID"
                        })
                    ]
                });

                var results = customrecord_saturo_portal_acces_managemSearchObj.run().getRange({
                    start: 0,
                    end: 1000
                });

                log.debug('Search Results:', JSON.stringify(results));

                if (results.length === 0) {
                    log.error('PR Portal License Validation - No License Found');
                    return {
                        isValid: false,
                        details: {
                            isCorrectPortalType: false,
                            isActiveStatus: false,
                            isActivated: false,
                            isNotExpired: false,
                            hasAccess: false,
                            error: "No license record found"
                        }
                    };
                }

                // Extract values with proper join prefix
                var recordData = {
                    activationDate: results[0].getValue({
                        name: "custrecord_activations_date",
                        join: "CUSTRECORD_PARENT_RECORD_LINK"
                    }),
                    expirationDate: results[0].getValue({
                        name: "custrecord_expirations_date",
                        join: "CUSTRECORD_PARENT_RECORD_LINK"
                    }),
                    portalType: results[0].getText({
                        name: "custrecord_portal_type",
                        join: "CUSTRECORD_PARENT_RECORD_LINK"
                    }),
                    accessCount: parseInt(results[0].getValue({
                        name: "custrecord_purchased_access_count",
                        join: "CUSTRECORD_PARENT_RECORD_LINK"
                    }) || 0),
                    status: results[0].getValue({
                        name: "custrecord_purchase_requisition_portal",
                        join: "CUSTRECORD_PARENT_RECORD_LINK"
                    })
                };

                log.debug('PR Portal License Details:', recordData);

                var today = new Date();
                log.debug('Current date:', today);

                var isCorrectPortalType = (recordData.portalType === "PR Portal");
                log.debug('Portal Type Check:', {
                    expected: "PR Portal",
                    actual: recordData.portalType,
                    result: isCorrectPortalType ? "PASS" : "FAIL"
                });

                var isActiveStatus = (recordData.status === true || recordData.status === "T");
                log.debug('Status Check:', {
                    expected: "Active (true/T)",
                    actual: recordData.status,
                    result: isActiveStatus ? "PASS" : "FAIL"
                });

                var activationDate = recordData.activationDate ? new Date(recordData.activationDate) : null;
                var expirationDate = recordData.expirationDate ? new Date(recordData.expirationDate) : null;

                var isActivated = activationDate ? (activationDate <= today) : false;
                var isNotExpired = expirationDate ? (today <= expirationDate) : false;

                log.debug('Activation Date Check:', {
                    activationDate: activationDate,
                    currentDate: today,
                    result: isActivated ? "PASS" : "FAIL"
                });

                log.debug('Expiration Date Check:', {
                    expirationDate: expirationDate,
                    currentDate: today,
                    result: isNotExpired ? "PASS" : "FAIL"
                });

                var employeeSearchObj = search.create({
                    type: "employee",
                    filters: [
                        ["isinactive", "is", "F"],
                        "AND",
                        ["custentity_ess_portal_access", "is", "T"]
                    ],
                    columns: [
                        search.createColumn({ name: "internalid", label: "Internal ID" })
                    ]
                });
                // var employeeCount = employeeSearchObjTejas.runPaged().count;
                let searchResult1 = employeeSearchObj.run().getRange({ start: 0, end: 1000 }) || [];
                var employeeCount = searchResult1.length;
                log.debug('lengthEmp', employeeCount)



                // log.debug("Active employees with portal access count", employeeCount);

                // var employeeCount = employeeSearchObj.run().getRange({
                //     start: 0,
                //     end: 1000
                // });
                // log.debug("Total employee count", employeeCount);

                var hasAccess = (recordData.accessCount > 0 && recordData.accessCount >= employeeCount)
                log.debug('Access Count Check:', {
                    accessCount: recordData.accessCount,
                    employeeCount: employeeCount,
                    result: hasAccess ? "PASS" : "FAIL"
                });

                var validationResult = {
                    isValid: isCorrectPortalType && isActiveStatus && isActivated && isNotExpired && hasAccess,
                    details: {
                        isCorrectPortalType: isCorrectPortalType,
                        isActiveStatus: isActiveStatus,
                        isActivated: isActivated,
                        isNotExpired: isNotExpired,
                        hasAccess: hasAccess,
                        accessCount: recordData.accessCount,
                        employeeCount: employeeCount,
                        activationDate: recordData.activationDate,
                        expirationDate: recordData.expirationDate
                    }
                };
                log.debug('Final Validation Result:', validationResult);
                return validationResult;

            } catch (e) {
                log.error({
                    title: 'PR Portal License Validation - Error',
                    details: {
                        employeeId: employeeId,
                        error: e.toString(),
                        stack: e.stack
                    }
                });
                return false;
            }
        }


        function checkScriptDeployment(deplyId) {
            try {
                log.debug('Starting deployment check for: ' + deplyId);

                log.debug('Creating deployment search');
                var deploymentSearch = search.create({
                    type: "scriptdeployment",
                    filters: [["scriptid", "is", deplyId]],
                    columns: [search.createColumn({ name: "isdeployed", label: "Is Deployed" })]
                });

                log.debug('Executing deployment search');
                var results = deploymentSearch.run().getRange({ start: 0, end: 1 });
                log.debug('Search returned ' + results.length + ' results');

                if (results.length > 0) {
                    var isDeployed = results[0].getValue("isdeployed");
                    log.debug('Deployment check result for ' + deplyId + ':', {
                        isDeployed: isDeployed,
                        deploymentId: results[0].id
                    });
                    return isDeployed;
                }

                log.warn('No deployment record found for script: ' + deplyId);
                return false;
            } catch (e) {
                log.error({
                    title: 'Script Deployment Check Error',
                    details: {
                        deploymentId: deplyId,
                        error: e.toString(),
                        stack: e.stack
                    }
                });
                return false;
            }
        }
        return {
            onRequest: onRequest
        };
    });
