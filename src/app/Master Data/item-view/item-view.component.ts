import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyNaptrRecord } from 'dns';
import { ClientService } from 'src/app/Services/client.service';
import { MasterApiService } from 'src/app/Services/master-api.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  ngOnInit(): void {
  }

}
