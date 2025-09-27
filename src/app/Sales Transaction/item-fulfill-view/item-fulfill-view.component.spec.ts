import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFulfillViewComponent } from './item-fulfill-view.component';

describe('ItemFulfillViewComponent', () => {
  let component: ItemFulfillViewComponent;
  let fixture: ComponentFixture<ItemFulfillViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFulfillViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFulfillViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
