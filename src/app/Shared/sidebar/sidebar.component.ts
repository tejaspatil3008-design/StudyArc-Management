import { Component, Renderer2, ViewChild, ElementRef, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('sidebarContainer', { static: false })
  sidebarContainer!: ElementRef;
  isCollapsed: boolean = false;
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isSidebarCollapsed: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) { }
  entity_id: any;
  entity: any;
  ngOnInit() {
  
  }
 
  isSidebarVisible = true;

  hideSidebar() {
    this.isSidebarVisible = false;
  }

  viewEmployee() {
    this.router.navigate(['api/saturo'])
  }

  viewDashboard() {
    this.router.navigate(['/dashboard'])
  }

  viewVendor(id: any) {
    console.log('vendor', id);
    this.router.navigate(['/vendor/' + id])
  }

  viewCustomer(id: any) {
    console.log('customer', id);
    this.router.navigate(['/entity/' + id])
  }

  viewItemList(){
    this.router.navigate(['item'])
  }

}
