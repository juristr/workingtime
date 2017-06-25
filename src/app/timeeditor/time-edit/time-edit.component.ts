import { Component, OnInit } from '@angular/core';

import { IWorkStats } from '../../core';
import { ParserService } from '../parser.service';
import { TimecalculatorService } from '../../core';

import * as moment from 'moment';

@Component({
  selector: 'wtm-time-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.css']
})
export class TimeEditComponent implements OnInit {
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ];
  timestamps;
  workStats: IWorkStats;
  hoursWorked: string;
  timeLeft: string;
  timeToReachMin: string;
  overtime: string;

  constructor(private timeCalculator: TimecalculatorService, private parser: ParserService) {}

  ngOnInit() {
    const stamps = `E08:00 U12:00
    E14:00`;
    this.calculateWorkTime(stamps);
  }

  calculateWorkTime(worktimeBox) {
    this.timestamps = this.parser.parseAttentanceTimestamps(worktimeBox);
    this.workStats = this.timeCalculator.calculateWorkingHours(this.timestamps);

    this.hoursWorked = moment(this.workStats.hoursWorked).utc().format('HH:mm');
    if (!this.workStats.isOvertime) {
      this.timeLeft = this.workStats.timeLeft.humanize();
      this.timeToReachMin = moment(this.workStats.timeToReachMin).format('HH:mm');
    } else {
      this.overtime = `${this.workStats.overtime.hours()}:${this.workStats.overtime.minutes()}`;
    }
  }
}
