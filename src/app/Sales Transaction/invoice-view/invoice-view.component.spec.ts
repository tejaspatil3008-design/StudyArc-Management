import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ ADD THIS
import { RouterTestingModule } from '@angular/router/testing';
import { InvoiceViewComponent } from './invoice-view.component';

describe('InvoiceViewComponent', () => {
  let component: InvoiceViewComponent;
  let fixture: ComponentFixture<InvoiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoiceViewComponent],
      imports: [
        HttpClientTestingModule, // ✅ ADD THIS
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});