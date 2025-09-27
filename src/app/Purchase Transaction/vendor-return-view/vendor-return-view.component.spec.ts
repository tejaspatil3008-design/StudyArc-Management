import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReturnViewComponent } from './vendor-return-view.component';

describe('VendorReturnViewComponent', () => {
  let component: VendorReturnViewComponent;
  let fixture: ComponentFixture<VendorReturnViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReturnViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorReturnViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
