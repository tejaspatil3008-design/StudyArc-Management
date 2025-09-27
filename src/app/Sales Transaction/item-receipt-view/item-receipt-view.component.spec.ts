import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReciptViewComponent } from './item-receipt-view.component';

describe('ItemReciptViewComponent', () => {
  let component: ItemReciptViewComponent;
  let fixture: ComponentFixture<ItemReciptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReciptViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemReciptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
