import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimecalculatorService {
  _minHoursToWork = moment.duration('08:00');

  constructor() {}

  calculateWorkingHours(stamps: Date[]) {
    let hoursWorkedDiff = 0;

    for (let i = 0; i < stamps.length - 1; i++) {
      hoursWorkedDiff += moment(stamps[i + 1]).diff(moment(stamps[i]));
      i++;
    }

    // if we have an odd number, fill in the gap of the last slot with
    // the current time
    if (stamps.length % 2 !== 0) {
      hoursWorkedDiff += moment().diff(moment(stamps[stamps.length - 1]));
    }

    let timeToReachMin = null;
    const remainingTime = this._minHoursToWork.subtract(moment.duration(hoursWorkedDiff));
    const overtime = moment.duration(hoursWorkedDiff).subtract(this._minHoursToWork);
    if (remainingTime.minutes() > 0) {
      timeToReachMin = moment().add(remainingTime);
    } else {
      console.log('>>>>>> overtime');
    }

    return {
      hoursWorked: hoursWorkedDiff,
      timeLeft: remainingTime,
      overtime: overtime,
      timeToReachMin: timeToReachMin
    };
  }
}
