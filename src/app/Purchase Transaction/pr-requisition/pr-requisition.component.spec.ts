import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRRequisitionComponent } from './pr-requisition.component';

describe('PRRequisitionComponent', () => {
  let component: PRRequisitionComponent;
  let fixture: ComponentFixture<PRRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
