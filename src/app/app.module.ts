import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Common/login/login.component';
import { DashboardComponent } from './DashBoard/dashboard/dashboard.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { VendorViewComponent } from './Master Data/vendor-view/vendor-view.component';
import { EmployeeViewComponent } from './Master Data/employee-view/employee-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';  // Import the dialog component

import { MatPaginatorModule } from '@angular/material/paginator'; // For mat-paginator
import { MatCardModule } from '@angular/material/card'; // For mat-card
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import this for mat-form-field
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './Interceptor/interceptor.interceptor';
import { InvoiceListComponent } from './Sales Transaction/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './Sales Transaction/invoice-view/invoice-view.component';
import { CustomerViewComponent } from './Master Data/customer-view/customer-view.component';
import { CustomerListComponent } from './Master Data/customer-list/customer-list.component';
import { PaymentListComponent } from './Sales Transaction/payment-list/payment-list.component';
import { PaymentViewComponent } from './Sales Transaction/payment-view/payment-view.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ItemListComponent } from './Master Data/item-list/item-list.component';
import { ItemViewComponent } from './Master Data/item-view/item-view.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { SalesOrderListComponent } from './Sales Transaction/sales-order-list/sales-order-list.component';
import { CreditMemoListComponent } from './Sales Transaction/credit-memo-list/credit-memo-list.component';
import { ViewCreditMemoComponent } from './Sales Transaction/view-credit-memo/view-credit-memo.component';
import { SalesOrderViewComponent } from './Sales Transaction/sales-order-view/sales-order-view.component';
import { CustRefundListComponent } from './Sales Transaction/cust-refund-list/cust-refund-list.component';
import { CustRefundViewComponent } from './Sales Transaction/cust-refund-view/cust-refund-view.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { ViewProjectComponent } from './Project/view-project/view-project.component';
import { ReturnAuthListComponent } from './Sales Transaction/return-auth-list/return-auth-list.component';
import { ReturnAuthViewComponent } from './Sales Transaction/return-auth-view/return-auth-view.component';
import { ItemFulfillComponent } from './Sales Transaction/item-fulfill/item-fulfill.component';
import { PRRequisitionComponent } from './Purchase Transaction/pr-requisition/pr-requisition.component';
import { PRRequisitionViewComponent } from './Purchase Transaction/pr-requisition-view/pr-requisition-view.component';
import { ItemFulfillViewComponent } from './Sales Transaction/item-fulfill-view/item-fulfill-view.component';
import { ItemReciptViewComponent } from './Sales Transaction/item-receipt-view/item-receipt-view.component';
import { ItemReciptListComponent } from './Sales Transaction/item-receipt-list/item-receipt-list.component';
import { VendorBillListComponent } from './Purchase Transaction/vendor-bill-list/vendor-bill-list.component';
import { ViewVendorBillComponent } from './Purchase Transaction/view-vendor-bill/view-vendor-bill.component';
import { PurchaseOrderListComponent } from './Purchase Transaction/purchase-order-list/purchase-order-list.component';
import { PurchaseOrderViewComponent } from './Purchase Transaction/purchase-order-view/purchase-order-view.component';
import { ItemReceiptPOListComponent } from './Purchase Transaction/item-receipt-polist/item-receipt-polist.component';
import { ItemReceiptPOViewComponent } from './Purchase Transaction/item-receipt-poview/item-receipt-poview.component';
import { BillCreditListComponent } from './Purchase Transaction/bill-credit-list/bill-credit-list.component';
import { ViewBillCreditComponent } from './Purchase Transaction/view-bill-credit/view-bill-credit.component';
import { VendorReturnListComponent } from './Purchase Transaction/vendor-return-list/vendor-return-list.component';
import { VendorReturnViewComponent } from './Purchase Transaction/vendor-return-view/vendor-return-view.component';
import { ItemShipmentListComponent } from './Purchase Transaction/item-shipment-list/item-shipment-list.component';
import { ItemShipmentViewComponent } from './Purchase Transaction/item-shipment-view/item-shipment-view.component';
import { BillPaymentComponent } from './Purchase Transaction/bill-payment/bill-payment.component';
import { BillPaymentViewComponent } from './Purchase Transaction/bill-payment-view/bill-payment-view.component';
import { JournalListsComponent } from './Financial/journal-lists/journal-lists.component';
import { JournalViewComponent } from './Financial/journal-view/journal-view.component';
import { ExpenseListComponent } from './Financial/expense-list/expense-list.component';
import { ExpenseViewComponent } from './Financial/expense-view/expense-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    CustomerViewComponent,
    VendorViewComponent,
    EmployeeViewComponent,
    InvoiceListComponent,
    InvoiceViewComponent,
    CustomerListComponent,
    PaymentListComponent,
    PaymentViewComponent,
    ItemListComponent,
    ItemViewComponent,
    SalesOrderListComponent,
    CreditMemoListComponent,
    ViewCreditMemoComponent,
    SalesOrderViewComponent,
    CustRefundListComponent,
    CustRefundViewComponent,
    ProjectListComponent,
    ViewProjectComponent,
    ReturnAuthListComponent,
    ReturnAuthViewComponent,
    ItemFulfillComponent,
    PRRequisitionComponent,
    PRRequisitionViewComponent,
    ItemFulfillViewComponent,
    ItemReciptViewComponent,
    ItemReciptListComponent,
    VendorBillListComponent,
    ViewVendorBillComponent,
    ItemReciptListComponent,
    PurchaseOrderListComponent,
    PurchaseOrderViewComponent,
    ItemReceiptPOListComponent,
    ItemReceiptPOViewComponent,
    ItemShipmentListComponent,
    ItemShipmentViewComponent,
    BillCreditListComponent,
    ViewBillCreditComponent,
    VendorReturnListComponent,
    VendorReturnViewComponent,
    ItemShipmentListComponent,
    BillPaymentComponent,
    BillPaymentViewComponent,
    JournalListsComponent,
    JournalViewComponent,
    ExpenseListComponent,
    ExpenseViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,

    MatDialogModule,
    MatExpansionModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
