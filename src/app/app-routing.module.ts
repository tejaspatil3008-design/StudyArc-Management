import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './DashBoard/dashboard/dashboard.component';
import { VendorViewComponent } from './Master Data/vendor-view/vendor-view.component';
import { EmployeeViewComponent } from './Master Data/employee-view/employee-view.component';
import { InvoiceListComponent } from './Sales Transaction/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './Sales Transaction/invoice-view/invoice-view.component';
import { CustomerViewComponent } from './Master Data/customer-view/customer-view.component';
import { CustomerListComponent } from './Master Data/customer-list/customer-list.component';
import { PaymentListComponent } from './Sales Transaction/payment-list/payment-list.component';
import { PaymentViewComponent } from './Sales Transaction/payment-view/payment-view.component';
import { ItemListComponent } from './Master Data/item-list/item-list.component';
import { ItemViewComponent } from './Master Data/item-view/item-view.component';
import { CreditMemoListComponent } from './Sales Transaction/credit-memo-list/credit-memo-list.component';
import { ViewCreditMemoComponent } from './Sales Transaction/view-credit-memo/view-credit-memo.component';
import { SalesOrderListComponent } from './Sales Transaction/sales-order-list/sales-order-list.component';
import { SalesOrderViewComponent } from './Sales Transaction/sales-order-view/sales-order-view.component';
import { CustRefundListComponent } from './Sales Transaction/cust-refund-list/cust-refund-list.component';
import { CustRefundViewComponent } from './Sales Transaction/cust-refund-view/cust-refund-view.component';
import { ProjectListComponent } from './Project/project-list/project-list.component';
import { ViewProjectComponent } from './Project/view-project/view-project.component';
import { ReturnAuthListComponent } from './Sales Transaction/return-auth-list/return-auth-list.component';
import { ReturnAuthViewComponent } from './Sales Transaction/return-auth-view/return-auth-view.component';
import { PRRequisitionComponent } from './Purchase Transaction/pr-requisition/pr-requisition.component';
import { PRRequisitionViewComponent } from './Purchase Transaction/pr-requisition-view/pr-requisition-view.component';
import { ItemFulfillComponent } from './Sales Transaction/item-fulfill/item-fulfill.component';
import { ItemFulfillViewComponent } from './Sales Transaction/item-fulfill-view/item-fulfill-view.component';
import { ItemReciptListComponent } from './Sales Transaction/item-receipt-list/item-receipt-list.component';
import { ItemReciptViewComponent } from './Sales Transaction/item-receipt-view/item-receipt-view.component';
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
import { LoginComponent } from './Common/login/login.component';
import { AuthGuard } from './Common/Auth/auth-guard';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
   { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'entity/:e_id', component: CustomerListComponent, canActivate: [AuthGuard]  },
  { path: 'entity/:e_id/customerInfo/:id', component: CustomerViewComponent, canActivate: [AuthGuard] },
  { path: 'vendor', component: VendorViewComponent, canActivate: [AuthGuard] },
  { path: 'api/saturo', component: EmployeeViewComponent, canActivate: [AuthGuard] },
  { path: 'invoiceList', component: InvoiceListComponent, canActivate: [AuthGuard] },
  { path: 'invoiceView/:id', component: InvoiceViewComponent, canActivate: [AuthGuard] },
  { path: 'paymentList', component: PaymentListComponent, canActivate: [AuthGuard] },
  { path: 'payment/:id', component: PaymentViewComponent, canActivate: [AuthGuard] },
  { path: 'item', component: ItemListComponent, canActivate: [AuthGuard] },
  { path: 'item/:id', component: ItemViewComponent, canActivate: [AuthGuard] },
  { path: 'creditMemoList', component: CreditMemoListComponent, canActivate: [AuthGuard] },
  { path: 'creditMemoList/:id', component: ViewCreditMemoComponent,canActivate: [AuthGuard] },
  { path: 'payment/:id', component: PaymentViewComponent, canActivate: [AuthGuard] },
  { path: 'paymentDetailsView/:id', component: PaymentViewComponent, canActivate: [AuthGuard] },
  { path: 'salesOrder', component: SalesOrderListComponent, canActivate: [AuthGuard] },
  { path: 'salesOrderView/:id', component: SalesOrderViewComponent, canActivate: [AuthGuard] },
  { path: 'custRefund', component: CustRefundListComponent, canActivate: [AuthGuard] },
  { path: 'custRefund/:id', component: CustRefundViewComponent, canActivate: [AuthGuard] },
  { path: 'projectList', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'projectList/:id', component: ViewProjectComponent, canActivate: [AuthGuard] },
  { path: 'pr_requsition', component: PRRequisitionComponent, canActivate: [AuthGuard] },
  { path: 'pr_requsition/:id', component: PRRequisitionViewComponent, canActivate: [AuthGuard] },
  { path: 'returnAuth', component: ReturnAuthListComponent, canActivate: [AuthGuard] },
  { path: 'returnAuthView/:id', component: ReturnAuthViewComponent, canActivate: [AuthGuard] },
  { path: 'itemFulfill', component: ItemFulfillComponent, canActivate: [AuthGuard] },
  { path: 'itemfulfill/:id',component:ItemFulfillViewComponent, canActivate: [AuthGuard]},
  { path: 'itemReceiptSO' , component:ItemReciptListComponent, canActivate: [AuthGuard]},
  { path: 'itemReceiptSO/:id', component:ItemReciptViewComponent, canActivate: [AuthGuard]},
  { path: 'purchaseOrder', component:PurchaseOrderListComponent, canActivate: [AuthGuard]},
  { path: 'purchaseOrder/:id', component:PurchaseOrderViewComponent, canActivate: [AuthGuard]},
  { path: 'itemReceiptPO', component:ItemReceiptPOListComponent, canActivate: [AuthGuard]},
  { path: 'itemreceiptPO/:id', component:ItemReceiptPOViewComponent, canActivate: [AuthGuard]},
  { path: 'vendorBill', component:VendorBillListComponent, canActivate: [AuthGuard]},
  { path: 'vendorBill/:id', component:ViewVendorBillComponent, canActivate: [AuthGuard]},
  { path: 'billCredit', component:BillCreditListComponent, canActivate: [AuthGuard]},
  { path: 'billCredit/:id', component:ViewBillCreditComponent, canActivate: [AuthGuard]},
  { path: 'vendorReturn', component:VendorReturnListComponent, canActivate: [AuthGuard]},
  { path: 'vendorReturn/:id', component:VendorReturnViewComponent, canActivate: [AuthGuard]},
  { path: 'itemShipment' , component:ItemShipmentListComponent, canActivate: [AuthGuard]},
  { path: 'itemShipment/:id', component:ItemShipmentViewComponent, canActivate: [AuthGuard]},
  { path: 'itemfulfill/:id', component: ItemFulfillViewComponent, canActivate: [AuthGuard] },
  { path: 'itemReceiptSO', component: ItemReciptListComponent, canActivate: [AuthGuard] },
  { path: 'itemReceiptSO/:id', component: ItemReciptViewComponent, canActivate: [AuthGuard] },
  { path: 'purchaseOrder', component: PurchaseOrderListComponent, canActivate: [AuthGuard] },
  { path: 'purchaseOrder/:id', component: PurchaseOrderViewComponent, canActivate: [AuthGuard] },
  { path: 'itemReceiptPO', component: ItemReceiptPOListComponent, canActivate: [AuthGuard] },
  { path: 'itemreceiptPO/:id', component: ItemReceiptPOViewComponent, canActivate: [AuthGuard] },
  { path: 'vendorBill', component: VendorBillListComponent, canActivate: [AuthGuard] },
  { path: 'vendorBill/:id', component: ViewVendorBillComponent, canActivate: [AuthGuard] },
  { path: 'billCredit', component: BillCreditListComponent, canActivate: [AuthGuard] },
  { path: 'billCredit/:id', component: ViewBillCreditComponent, canActivate: [AuthGuard] },
  { path: 'vendorReturn', component: VendorReturnListComponent, canActivate: [AuthGuard] },
  { path: 'vendorReturn/:id', component: VendorReturnViewComponent, canActivate: [AuthGuard] },
  { path: 'itemShipment', component: ItemShipmentListComponent, canActivate: [AuthGuard] },
  { path: 'itemShipment/:id', component: ItemShipmentViewComponent, canActivate: [AuthGuard] },
  { path: 'billPayment', component: BillPaymentComponent, canActivate: [AuthGuard]},
  { path: 'billPayment/:id', component:BillPaymentViewComponent, canActivate: [AuthGuard]},
  { path: 'journalList', component:JournalListsComponent, canActivate: [AuthGuard]},
  { path: 'journalList/:id', component: JournalViewComponent, canActivate: [AuthGuard]},
  { path: 'expenseList', component: ExpenseListComponent, canActivate: [AuthGuard]},
  { path: 'expenseList/:id', component: ExpenseViewComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

