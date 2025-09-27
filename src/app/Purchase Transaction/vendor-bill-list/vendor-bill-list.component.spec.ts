import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBillListComponent } from './vendor-bill-list.component';

describe('VendorBillListComponent', () => {
  let component: VendorBillListComponent;
  let fixture: ComponentFixture<VendorBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
