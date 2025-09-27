import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustRefundListComponent } from './cust-refund-list.component';

describe('CustRefundListComponent', () => {
  let component: CustRefundListComponent;
  let fixture: ComponentFixture<CustRefundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustRefundListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustRefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
