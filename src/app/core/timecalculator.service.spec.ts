import { TestBed, inject } from '@angular/core/testing';
import * as moment from 'moment';

import { TimecalculatorService } from './timecalculator.service';

describe('TimecalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimecalculatorService]
    });
  });

  it(
    'should be created',
    inject([TimecalculatorService], (service: TimecalculatorService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should correctly calculate hours for a complete day',
    inject([TimecalculatorService], (service: TimecalculatorService) => {
      const stamps = [
        moment('08:00', 'HH:mm').toDate(),
        moment('12:00', 'HH:mm').toDate(),
        moment('14:00', 'HH:mm').toDate(),
        moment('18:00', 'HH:mm').toDate()
      ];

      const workingStats = service.calculateWorkingHours(stamps);
      expect(moment(workingStats.hoursWorked).utc().hours()).toBe(8);
    })
  );

  it(
    'should correctly calculate hours for a missing stamp at the end of the day by filling up the missing slot with the actual time',
    inject([TimecalculatorService], (service: TimecalculatorService) => {
      const stamps = [
        moment('08:00', 'HH:mm').toDate(),
        moment('12:00', 'HH:mm').toDate(),
        moment('14:00', 'HH:mm').toDate()
      ];

      const hoursToCurrentTime = moment().diff(moment(stamps[stamps.length - 1]));

      const workingStats = service.calculateWorkingHours(stamps);
      expect(moment(workingStats.hoursWorked).utc().hours()).toBe(
        4 + moment(hoursToCurrentTime).utc().hours()
      );
    })
  );
});
