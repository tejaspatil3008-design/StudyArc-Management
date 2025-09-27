import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptPOViewComponent } from './item-receipt-poview.component';

describe('ItemReceiptPOViewComponent', () => {
  let component: ItemReceiptPOViewComponent;
  let fixture: ComponentFixture<ItemReceiptPOViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptPOViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemReceiptPOViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
