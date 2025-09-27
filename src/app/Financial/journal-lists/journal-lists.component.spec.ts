import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalListsComponent } from './journal-lists.component';

describe('JournalListsComponent', () => {
  let component: JournalListsComponent;
  let fixture: ComponentFixture<JournalListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
