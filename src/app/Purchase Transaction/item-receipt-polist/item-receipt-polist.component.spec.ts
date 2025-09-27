import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceiptPOListComponent } from './item-receipt-polist.component';

describe('ItemReceiptPOListComponent', () => {
  let component: ItemReceiptPOListComponent;
  let fixture: ComponentFixture<ItemReceiptPOListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReceiptPOListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemReceiptPOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
