import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreditMemoComponent } from './view-credit-memo.component';

describe('ViewCreditMemoComponent', () => {
  let component: ViewCreditMemoComponent;
  let fixture: ComponentFixture<ViewCreditMemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCreditMemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCreditMemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
