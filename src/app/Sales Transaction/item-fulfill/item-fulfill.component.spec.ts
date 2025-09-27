import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFulfillComponent } from './item-fulfill.component';

describe('ItemFulfillComponent', () => {
  let component: ItemFulfillComponent;
  let fixture: ComponentFixture<ItemFulfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFulfillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFulfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
