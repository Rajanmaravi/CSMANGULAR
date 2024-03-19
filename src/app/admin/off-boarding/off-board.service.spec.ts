import { TestBed } from '@angular/core/testing';

import { OffBoardService } from './off-board.service';

describe('OffBoardService', () => {
  let service: OffBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
