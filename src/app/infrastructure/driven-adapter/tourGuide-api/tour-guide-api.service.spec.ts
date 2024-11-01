import { TestBed } from '@angular/core/testing';

import { TourGuideApiService } from './tour-guide-api.service';

describe('TourGuideApiService', () => {
  let service: TourGuideApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourGuideApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
