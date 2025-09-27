import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DailogService } from 'src/app/Services/dailog.service';
import { ClientService } from 'src/app/Services/client.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  resizingColumn: HTMLElement | null = null;
  startX: number = 0;
  startWidth: number = 0;
  filteredInvoiceTranData: any[] = [];
  endDate: any = new Date();
  startDate: any = new Date(new Date().setDate(this.endDate.getDate() - 30));
  constructor(private clientService: ClientService, private excelExportService: ExcelExportService,
    private router: Router, private dailogService: DailogService, public app: AppComponent, private datePipe: DatePipe) {
    this.endDate = datePipe.transform(this.endDate, 'yyyy-MM-dd');
    this.startDate = datePipe.transform(this.startDate, '2012-11-11');
  }
  ngOnInit(): void {
    this.InvoiceList();
  }

  onMouseDown(event: MouseEvent, column: any) {
    this.resizingColumn = column;
    this.startX = event.pageX;
    this.startWidth = column.offsetWidth;
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseMove(event: MouseEvent) {
    if (this.resizingColumn) {
      const newWidth = this.startWidth + (event.pageX - this.startX);
      this.resizingColumn.style.width = `${newWidth}px`;
    }
  }

  onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
    this.resizingColumn = null;
  }
  /************************************************Invoice List & Invoice Count*********************************************************************/
  results: any;
  keys: any;
  type: any;
  Item_type: any;
  InvoiceList() {
    const conditions: any[] = [];

    conditions.push({
      "column": "t.trantype",
      "operator": "=",
      "value": "Invoice",
      "logicalOp": "AND"
    });

    if (this.type) {
      const formattedEndDate = new Date(this.endDate).toISOString().split("T")[0];
      const formattedStartDate = new Date(this.startDate).toISOString().split("T")[0];
      conditions.push(
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "c.companyname",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": " c.firstname",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "CAST(t.ns_id AS VARCHAR)",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "t.tranid",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "AND"
        }

      );
    }
    // Apply the start date filter if provided
    if (this.startDate) {
      const formattedStartDate = new Date(this.startDate).toISOString().split("T")[0];
      conditions.push({
        "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
        "operator": ">=",
        "value": formattedStartDate,
        "logicalOp": "AND"
      });
    }

    if (this.endDate) {
      const formattedEndDate = new Date(this.endDate).toISOString().split("T")[0];
      conditions.push({
        "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
        "operator": "<=",
        "value": formattedEndDate,
        "logicalOp": "AND"
      });
    }

    const object = {
      "recordName": "invoiceList",
      "conditions": conditions,
      "offset": `${this.pageNo}`,
      "limit": `${this.pageSize}`
    };
    console.log("object1", object);
    this.invoiceCount();
    this.clientService.getRecord(object).subscribe({
      next: data => {
        console.log('data', data);
        this.results = data;
        this.totalPage = Math.ceil(this.totalRecord / this.pageSize);
        if (this.results.length > 0) {
          this.keys = Object.keys(this.results[0]);
        }
      },
      error: err => {
        console.log('error', err);
      }
    })
  }

  invoiceCount() {
    const conditions: any[] = [];

    conditions.push({
      "column": "t.trantype",
      "operator": "=",
      "value": "Invoice",
      "logicalOp": "AND"
    });
 // Apply the start date filter if provided
 if (this.startDate) {
  const formattedStartDate = new Date(this.startDate).toISOString().split("T")[0];
  conditions.push({
    "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
    "operator": ">=",
    "value": formattedStartDate,
    "logicalOp": "AND"
  });
}

if (this.endDate) {
  const formattedEndDate = new Date(this.endDate).toISOString().split("T")[0];
  conditions.push({
    "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
    "operator": "<=",
    "value": formattedEndDate,
    "logicalOp": "AND"
  });
}
    if (this.type) {
      const formattedEndDate = new Date(this.endDate).toISOString().split("T")[0];
      const formattedStartDate = new Date(this.startDate).toISOString().split("T")[0];
      conditions.push(
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "c.companyname",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "c.firstname",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "CAST(t.ns_id AS VARCHAR)",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "OR"
        },
        {
          "column": "t.trantype",
          "operator": "=",
          "value": "Invoice",
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": ">=",
          "value": formattedStartDate,
          "logicalOp": "AND"
        },
        {
          "column": "TO_DATE(t.trandate, 'DD-MM-YYYY')",
          "operator": "<=",
          "value": formattedEndDate,
          "logicalOp": "AND"
        },
        {
          "column": "t.tranid",
          "operator": "ilike",
          "value": `%${this.type}%`,
          "logicalOp": "AND"
        }
      );
    }
   
    const obj = {
      "recordName": "invoice_count",
      "conditions": conditions
    };
    console.log("object1", obj);
    this.clientService.getRecordCount(obj).subscribe({
      next: (data) => {
        this.totalRecord = data[0].count;
        this.totalPage = Math.ceil(this.totalRecord / this.pageSize);
        console.log("count", this.totalRecord);
      },
      error: err => {
        console.log("error total Record", err);
      }
    })
  }
  /*********************************************View Invoice **********************************************/

  View(id: any) {
    console.log("id", id);
    this.router.navigate(['/invoiceView/' + id])
  }

  /**********************************************Invoice List Pagination**********************************************/

  goButtonText: string = 'Go to Page';
  pageNo: any = 0;
  enteredPageNo: number = this.pageNo + 1;
  isPageNoValid: boolean = false;
  isEditable: boolean = false;
  pageSize: number = 30;
  totalRecord: any;
  totalPage: any;
  orderPerPage: any;

  onDateChange() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    this.pageNo = 0;
    this.InvoiceList();
  }

  toggleGoButtonText() {
    this.goButtonText = this.enteredPageNo ? 'Go to Page' : '';
  }

  updateGoButtonState() {
    this.isPageNoValid = !isNaN(this.enteredPageNo);
  }

  getInputWidth(): number {
    return (this.enteredPageNo.toString().length * 10) + 20;
  }

  toggleEditable(): void {
    this.isEditable = !this.isEditable;
  }
  get displayPageNo(): number {
    return this.pageNo + 1;
  }

  set displayPageNo(value: number) {
    this.pageNo = value - 1;
  }

  onGo(): void {
    const newPageNo = this.enteredPageNo - 1;

    if (newPageNo >= 0 && newPageNo < this.totalPage) {
      this.pageNo = newPageNo;
      this.displayPageNo = this.enteredPageNo;
      this.InvoiceList();
    } else {
      this.dailogService?.openDialog('Page Not Available!').afterClosed().subscribe(() => {
        this.enteredPageNo = this.displayPageNo;  // Reset the enteredPageNo after closing the dialog
      });
    }
  }



  onPrevious(): void {
    if (this.pageNo > 0) {
      this.pageNo--;
      this.enteredPageNo = this.displayPageNo;
      this.InvoiceList();
    }
    else if (this.pageNo < 0) {
      this.dailogService.openDialog('Previous Page is Not Available!');

      this.InvoiceList();
    }
  }

  onNext(): void {
    if (this.pageNo < this.totalPage - 1) {
      this.pageNo++;
      this.enteredPageNo = this.displayPageNo;
      this.InvoiceList();
    } else {
      // Use the dialog service to show the popup
      this.dailogService.openDialog('Next Page is Not Available!');
      this.InvoiceList();
    }
  }

  onInvoicePerPageChange(event: any): void {
    const selectedValue = event.target.value;
    this.orderPerPage = parseInt(selectedValue, 10);
    this.pageSize = this.orderPerPage;
    this.pageNo = 0;
    this.InvoiceList();
  }

  applySearch() {
    this.pageNo = 0;
    this.InvoiceList();
  }
  /****************************Excel to Export***************************************/

  InvoiceExcelExport() {
    let filename = 'Invoice';
    if (this.results && this.results.length > 0) {
      this.excelExportService.exportToExcel(this.results, this.keys, filename);
    } else {
      this.dailogService.openDialog('No data available for export!');
      console.log('No data available for export!');
    }
  }


  /*************************************************************Invoice Import**************************************************** */

  isLoading = false;
  InvoiceImport() {

    this.isLoading = true;
    this.clientService.importInvoice().subscribe(
      (response) => {
        console.log("Invoice Import", response);

        this.isLoading = false;
        this.dailogService.openDialog('Invoice Import Successfully!');
        this.InvoiceList();
      },
      (error) => {
        this.isLoading = false;
        this.dailogService.openDialog('Error Importing Invoice');
      }
    )
  }

}
