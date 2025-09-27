import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { VendorViewComponent } from '../Master Data/vendor-view/vendor-view.component';

@Injectable({
  providedIn: 'root'
})
export class DailogService {

  constructor(private dialog: MatDialog) { }

  openDialog(message: string): MatDialogRef<VendorViewComponent> {
    const dialogConfig = new MatDialogConfig();
  
    dialogConfig.width = '300px';  
    dialogConfig.height = '200px'; 
    dialogConfig.data = { title: message }; 
    dialogConfig.panelClass = 'custom-dialog';  
  
    return this.dialog?.open(VendorViewComponent, dialogConfig);
  }
  
  
}
