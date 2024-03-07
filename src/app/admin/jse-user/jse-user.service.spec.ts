import { TestBed } from '@angular/core/testing';

import { JseUserService } from './jse-user.service';

describe('JseUserService', () => {
  let service: JseUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JseUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
