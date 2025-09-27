import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-journal-lists',
  templateUrl: './journal-lists.component.html',
  styleUrls: ['./journal-lists.component.css']
})
export class JournalListsComponent implements OnInit {

  ngOnInit(): void {
  }



}
