import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAuthViewComponent } from './return-auth-view.component';

describe('ReturnAuthViewComponent', () => {
  let component: ReturnAuthViewComponent;
  let fixture: ComponentFixture<ReturnAuthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAuthViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAuthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
