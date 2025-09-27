import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { FormBuilder } from '@angular/forms';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  ngOnInit(): void {
  }


}
