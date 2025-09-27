import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vendor-return-list',
  templateUrl: './vendor-return-list.component.html',
  styleUrls: ['./vendor-return-list.component.css']
})
export class VendorReturnListComponent implements OnInit {

  ngOnInit(): void {
  }

}
