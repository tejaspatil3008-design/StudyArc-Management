import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemShipmentListComponent } from './item-shipment-list.component';

describe('ItemShipmentListComponent', () => {
  let component: ItemShipmentListComponent;
  let fixture: ComponentFixture<ItemShipmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemShipmentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemShipmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
