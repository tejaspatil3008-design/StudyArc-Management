import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnAuthListComponent } from './return-auth-list.component';

describe('ReturnAuthListComponent', () => {
  let component: ReturnAuthListComponent;
  let fixture: ComponentFixture<ReturnAuthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnAuthListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
