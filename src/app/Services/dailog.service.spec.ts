// dailog.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog'; // ✅ Add this

import { DailogService } from './dailog.service';

describe('DailogService', () => {
  let service: DailogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule // ✅ Add this
      ]
    });
    service = TestBed.inject(DailogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});