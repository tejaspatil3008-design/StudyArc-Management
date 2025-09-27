import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorBillComponent } from './view-vendor-bill.component';

describe('ViewVendorBillComponent', () => {
  let component: ViewVendorBillComponent;
  let fixture: ComponentFixture<ViewVendorBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVendorBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVendorBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
