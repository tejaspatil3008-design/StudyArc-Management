import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReturnListComponent } from './vendor-return-list.component';

describe('VendorReturnListComponent', () => {
  let component: VendorReturnListComponent;
  let fixture: ComponentFixture<VendorReturnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReturnListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorReturnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
