import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAboutMenuOpen = false; 

  @Input() drawer: any; 
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private router:Router) {
  this.checkMobileView(window.innerWidth);
  }

  ngOnInit(): void {}

  onToggleSidenav() {
    this.toggleSidenav.emit(); 
  }
  isSalesTabMenuOpen = false; // Tracks the open state of the Sales tab menu
  isPurchaseTabMenuOpen =false;
isFinanceTabMenuOpen =false;
  openPurchaseTabMenu(){
    this.isPurchaseTabMenuOpen =true;
  }
  openSalestabMenu(){
    this.isSalesTabMenuOpen =false;
  }
  openSalesTabMenu() {
    this.isSalesTabMenuOpen = true;
  }

  closeSalesTabMenu() {
    this.isSalesTabMenuOpen = false;
  }
  isSalesMenuOpen = false;  
  isPurchaseMenuOpen = false; 
  isProjectMenuOpen =false;
  isMobileView: boolean = false;
  showLogoutButton: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const screenWidth = window.innerWidth;
    this.checkMobileView(screenWidth);
  }

  checkMobileView(screenWidth: number) {
  this.isMobileView = screenWidth <= 768;
  }

  viewNewSalesOrder() {
  console.log('Navigating to New Sales Order');
  }

  viewReturnAuthorization() {
  console.log('Navigating to Return Authorization');
  }

  viewPurchaseOrder() {
    console.log('Navigating to Purchase Order');
  }

  InvoiceList(){
    this.router.navigate(['/invoiceList']);
  }
  
  paymentList(){
    console.log('pay');
    this.router.navigate(['/paymentList']);   
  }
  creditMemoList(){
    this.router.navigate(['/creditMemoList']);
  }

  custRefundList(){
     this.router.navigate(['/custRefund'])
  }
  salesOrder(){
      console.log('sales');
      this.router.navigate(['/salesOrder']);   
  }

  projectList(){
    this.router.navigate(['/projectList'])
  }
  purchaseReqsition(){
    this.router.navigate(['/pr_requsition'])
  }

  vendorBill(){
    this.router.navigate(['/vendorBill']);
  }

  journalEntriesList(){
    this.router.navigate(['/journalList'])
  }
  expensesList(){
    this.router.navigate(['/expenseList'])
  }

  billCredit(){
    this.router.navigate(['/billCredit'])
  }

  vendorReturnAuth(){
    this.router.navigate(['/vendorReturn'])
  }
  ReturnAuthList(){
    this.router.navigate(['/returnAuth']);   
  }
  
  itemfulfill(){
    this.router.navigate(['/itemFulfill']);
  }

  ItemReciptListSO(){
    this.router.navigate(['/itemReceiptSO'])
  }
  viewHome() {
    this.router.navigate(['/dashboard'])
  }
  
  purchaseOrderList(){
    this.router.navigate(['/purchaseOrder'])
  }

  POItemReceipt(){
    this.router.navigate(['/itemReceiptPO'])
  }

  itemShipment(){
    this.router.navigate(['/itemShipment'])
  }

  billPayment(){
    this.router.navigate(['/billPayment'])
  }
 @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  
  isMenuOpen = false;      
  isHovering = false;    
  hoverTimeout: any; 

  onMouseEnterMenu() {
    this.isHovering = true;
    clearTimeout(this.hoverTimeout);
    if (!this.isMenuOpen) {
      this.hoverTimeout = setTimeout(() => {
        if (this.isHovering) {
          this.menuTrigger.openMenu();
          this.isMenuOpen = true;
        }
      }, 200);  
    }
  }

  onMouseLeaveMenu() {
    this.isHovering = false;
    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = setTimeout(() => {
      if (!this.isHovering && this.isMenuOpen) {
        this.menuTrigger.closeMenu();
        this.isMenuOpen = false;
      }
    }, 200); 
  }


  toggleLogoutButton(): void {
    this.showLogoutButton = !this.showLogoutButton;
  }

  onLogout(): void {
    localStorage.removeItem('authToken'); // Clear authentication token
    this.router.navigate(['/login']); // Redirect to login page
  }
}
