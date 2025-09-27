import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRRequisitionViewComponent } from './pr-requisition-view.component';

describe('PRRequisitionViewComponent', () => {
  let component: PRRequisitionViewComponent;
  let fixture: ComponentFixture<PRRequisitionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRRequisitionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRRequisitionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
