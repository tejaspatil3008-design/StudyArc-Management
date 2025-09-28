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
  getInputWidth: () => string;

  
  ngOnInit(): void {
  }


}
