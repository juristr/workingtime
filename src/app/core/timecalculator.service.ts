import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class TimecalculatorService {
  constructor() {}

  calculateWorkingHours(stamps: Date[]) {
    let hoursWorked = 0;

    for (let i = 0; i < stamps.length - 1; i++) {
      hoursWorked += moment(stamps[i + 1]).diff(moment(stamps[i]));
      i++;
    }

    return {
      hoursWorked: hoursWorked
    };
  }
}
