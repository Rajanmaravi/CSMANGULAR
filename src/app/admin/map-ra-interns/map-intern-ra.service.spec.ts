import { TestBed } from '@angular/core/testing';

import { MapInternRaService } from './map-intern-ra.service';

describe('MapInternRaService', () => {
  let service: MapInternRaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapInternRaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
