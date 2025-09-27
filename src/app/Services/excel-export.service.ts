import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  constructor() { }

  async exportToExcel(data: any[], headers: string[], fileName: string) {
    let workbook = new ExcelJS.Workbook();
    let worksheet = workbook.addWorksheet('Transactions');
  
    for (let i = 0; i < 2; i++) {
      worksheet.addRow([]);
    }

    let titleRow = worksheet.addRow([fileName +' List']);
    const headerStartCol = 1; 
    const numberOfHeaders = headers.length-1;
    worksheet.mergeCells(titleRow.number, headerStartCol, titleRow.number, headerStartCol + numberOfHeaders - 1);
    titleRow.getCell(1).alignment = { horizontal: 'left', vertical: 'middle' };
    titleRow.getCell(1).font = { bold: true, size: 16 };
  
    //create header 
    let headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '2E75B6' }
      };
      cell.font = {
        bold: true,
        color: { argb: 'FFFFFF' }
      };
      cell.alignment = { horizontal: 'center', vertical: 'middle' };
      cell.border = {
        top: { style: 'thin', color: { argb: 'ffb84d' } },
        bottom: { style: 'thin', color: { argb: 'ffb84d' } },
        left: { style: 'thin', color: { argb: 'ffb84d' } },
        right: { style: 'thin', color: { argb: 'ffb84d' } }
      };
    });
  
    // Add data rows based on the headers
    data.forEach(rowData => {
      let rowValues = headers.map(key => rowData[key] !== null && rowData[key] !== undefined ? rowData[key] : '');
      let row = worksheet.addRow(rowValues);
  
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.border = {
          top: { style: 'thin' },
          bottom: { style: 'thin' },
          left: { style: 'thin' },
          right: { style: 'thin' }
        };
      });
    });
  
    // Auto-adjust column width
    worksheet.columns.forEach((column, index) => {
      const columnData = [headers[index], ...data.map(row => row[headers[index]] !== null && row[headers[index]] !== undefined ? row[headers[index]].toString() : '')];
      let maxLength = Math.max(...columnData.map(item => item.length));
      column.width = maxLength + 2; 
    });
  
    // Generate and save Excel file
    try {
      const buffer = await workbook.xlsx.writeBuffer();
      this.saveAsExcelFile(buffer, fileName);
    } catch (error) {
      console.error('Error exporting Excel:', error);
    }
  }
  
  private saveAsExcelFile(buffer: any, fileName: string): void {
    let data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, `${fileName}.xlsx`);
  }
  

}
