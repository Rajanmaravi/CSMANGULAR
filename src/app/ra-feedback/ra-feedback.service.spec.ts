import { TestBed } from '@angular/core/testing';

import { RaFeedbackService } from './ra-feedback.service';

describe('RaFeedbackService', () => {
  let service: RaFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
