import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { MasterApiService } from 'src/app/Services/master-api.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-credit-memo-list',
  templateUrl: './credit-memo-list.component.html',
  styleUrls: ['./credit-memo-list.component.css']
})
export class CreditMemoListComponent implements OnInit {

  ngOnInit(): void {
  }


}


