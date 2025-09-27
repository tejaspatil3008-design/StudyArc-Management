import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-sales-order-view',
  templateUrl: './sales-order-view.component.html',
  styleUrls: ['./sales-order-view.component.css']
})
export class SalesOrderViewComponent implements OnInit {

  ngOnInit(): void {
  }

}
