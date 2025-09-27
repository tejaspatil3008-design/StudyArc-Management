import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';

@Component({
  selector: 'app-item-fulfill',
  templateUrl: './item-fulfill.component.html',
  styleUrls: ['./item-fulfill.component.css']
})
export class ItemFulfillComponent implements OnInit {
  ngOnInit(): void {
  }

}
