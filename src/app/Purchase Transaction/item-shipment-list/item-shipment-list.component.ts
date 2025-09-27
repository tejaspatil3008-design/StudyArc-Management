import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';

@Component({
  selector: 'app-item-shipment-list',
  templateUrl: './item-shipment-list.component.html',
  styleUrls: ['./item-shipment-list.component.css']
})
export class ItemShipmentListComponent implements OnInit {


  ngOnInit(): void {
  }


}
