import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { MasterApiService } from 'src/app/Services/master-api.service';
import { TransactionService } from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  resizingColumn: HTMLElement | null = null;
  startX: number = 0;
  startWidth: number = 0;
  filteredInvoiceTranData: any[] = [];
  parms: any;
  constructor(private router: Router,
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    this.viewInvoiceInformation(id);
    this.viewTransactionItemDetailsInformation(id);
    this.viewTransactionPaymenteDetailsInformation(id);
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


  selectedItem: any;
  results: any;
  keys: string[] = [];
  viewInvoiceInformation(id: any) {
    const obj = {
      recordName: 'invoice_info',
      conditions: [
        {
          column: "t.transaction_id",
          operator: "=",
          value: `${id}`,
          logicalOp: "AND"
        }
      ]
    };
    console.log('invoice Object', obj);

    this.clientService.getRecord(obj).subscribe({
      next: (data: any) => {
        console.log('Data received invoice:', data);

        if (data && data.length > 0) {
          this.selectedItem = data[0];
          this.keys = data.length > 0
            ? Object.keys(data[0]) : [];
        } else {
          console.warn('No data found for the given id');
          this.selectedItem = null;
        }
      },
      error: (err) => {
        console.error('Error fetching item details:', err);
      }
    });
  }

  invoiceKeys: any
  itemResult: any;
  viewTransactionItemDetailsInformation(id: any) {
    const obj = {
      recordName: 'InvoiceItemDetail',
      conditions: [
        {
          column: "ti.transaction_id_fk",
          operator: "=",
          value: `${id}`,
          logicalOp: "AND"
        }
      ],
      orderBy: "ti.transactionitemdetail_id ASC"
    };

    console.log('item Object', obj);
    this.clientService.getRecord(obj).subscribe({
      next: (data: any) => {
        console.log('Data received item:', data);
        this.itemResult = data;
        if (data && data.length > 0) {
          // this.selectedItem = data[0];
          this.invoiceKeys = Object.keys(data[0]);
        } else {
          console.warn('No data found for the given id');
          // this.selectedItem = null;
        }
      },
      error: (err) => {
        console.error('Error fetching item details:', err);
      }
    });
  }

  paymentKeys: any
  paymentResult: any;
  viewTransactionPaymenteDetailsInformation(id: any) {
    const obj = {
      recordName: 'related_record',
      conditions: [
        {
          column: "apply_ns_id",
          operator: "IN",
          value: `(select ns_id from transaction where transaction_id=${id})`,
          logicalOp: "AND"
        }
      ],
      orderBy: "related_record_id ASC"
    };

    console.log('related recod Object', obj);
    this.clientService.getRecord(obj).subscribe({
      next: (data: any) => {
        console.log('Data received invoice:', data);
        this.paymentResult = data;
        if (data && data.length > 0) {
          // this.selectedItem = data[0];
          this.paymentKeys = Object.keys(data[0]);
        } else {
          console.warn('No data found for the given id');
          // this.selectedItem = null;
        }
      },
      error: (err) => {
        console.error('Error fetching item details:', err);
      }
    });
  }

  // /***********************************show item payment and related records on transaction information******************* */
  isItemTableVisible: boolean = true;
  isPaymentTableVisible: boolean = false;
  toggleVisibility(tableType: string, event: Event) {
    event?.preventDefault();

    if (tableType === 'item') {
      this.isItemTableVisible = true;
      this.isPaymentTableVisible = false;
    } else if (tableType === 'payment') {
      this.isItemTableVisible = false;
      this.isPaymentTableVisible = true;
    } else if (tableType === 'related') {
      this.isItemTableVisible = false;
      this.isPaymentTableVisible = false;
    }
  }

  /***************************************Refresh and remove icon code******************************************************************** */
  refreshPage() {
    const scrollPosition = window.scrollY;
    window.location.reload();
  }

  redirectToHome(): void {
    this.router.navigate(['/dashboard']);
  }

  isHovered: boolean = false;

  showRefreshText() {
    this.isHovered = true;
  }

  hideRefreshText() {
    this.isHovered = false;
  }

  goBack(): void {
    this.router.navigate(['/invoiceList']);
  }
}
