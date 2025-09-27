import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { MasterApiService } from 'src/app/Services/master-api.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-cust-refund-list',
  templateUrl: './cust-refund-list.component.html',
  styleUrls: ['./cust-refund-list.component.css']
})
export class CustRefundListComponent implements OnInit {

  ngOnInit(): void {
  }

}
