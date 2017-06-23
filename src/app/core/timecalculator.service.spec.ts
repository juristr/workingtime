import { TestBed, inject } from '@angular/core/testing';

import { TimecalculatorService } from './timecalculator.service';

describe('TimecalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimecalculatorService]
    });
  });

  it('should be created', inject([TimecalculatorService], (service: TimecalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
