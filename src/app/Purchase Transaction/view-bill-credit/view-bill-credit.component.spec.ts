import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillCreditComponent } from './view-bill-credit.component';

describe('ViewBillCreditComponent', () => {
  let component: ViewBillCreditComponent;
  let fixture: ComponentFixture<ViewBillCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBillCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBillCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
