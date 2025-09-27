import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Services/client.service';
import { DailogService } from 'src/app/Services/dailog.service';
import { MasterApiService } from 'src/app/Services/master-api.service';
import { ExcelExportService } from 'src/app/Services/excel-export.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  ngOnInit(): void {
  }

}



