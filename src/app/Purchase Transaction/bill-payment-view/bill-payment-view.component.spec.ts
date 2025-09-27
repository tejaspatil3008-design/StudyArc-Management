import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPaymentViewComponent } from './bill-payment-view.component';

describe('BillPaymentViewComponent', () => {
  let component: BillPaymentViewComponent;
  let fixture: ComponentFixture<BillPaymentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPaymentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
