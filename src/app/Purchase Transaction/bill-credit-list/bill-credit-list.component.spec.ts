import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCreditListComponent } from './bill-credit-list.component';

describe('BillCreditListComponent', () => {
  let component: BillCreditListComponent;
  let fixture: ComponentFixture<BillCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillCreditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
