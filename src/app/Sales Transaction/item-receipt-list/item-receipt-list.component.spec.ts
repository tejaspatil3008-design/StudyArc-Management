import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReciptListComponent } from './item-receipt-list.component';

describe('ItemReciptListComponent', () => {
  let component: ItemReciptListComponent;
  let fixture: ComponentFixture<ItemReciptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemReciptListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemReciptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
