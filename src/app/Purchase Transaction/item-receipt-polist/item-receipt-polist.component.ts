import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';

@Component({
  selector: 'app-item-receipt-polist',
  templateUrl: './item-receipt-polist.component.html',
  styleUrls: ['./item-receipt-polist.component.css']
})
export class ItemReceiptPOListComponent implements OnInit {

  ngOnInit(): void {
  }


}
