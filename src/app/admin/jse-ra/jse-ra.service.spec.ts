import { TestBed } from '@angular/core/testing';

import { JseRaService } from './jse-ra.service';

describe('JseRaService', () => {
  let service: JseRaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JseRaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
