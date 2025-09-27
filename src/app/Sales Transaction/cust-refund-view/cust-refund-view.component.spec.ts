import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRefundViewComponent } from './cust-refund-view.component';

describe('CustRefundViewComponent', () => {
  let component: CustRefundViewComponent;
  let fixture: ComponentFixture<CustRefundViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustRefundViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustRefundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
