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
  workStats: IWorkStats;
  hoursWorked: string;
  timeLeft: string;
  timeToReachMin: string;
  overtime: string;

  constructor(private timeCalculator: TimecalculatorService, private parser: ParserService) {}

  ngOnInit() {
    const stamps = `E07:45 U12:48
    E13:38`;
    this.calculateWorkTime(stamps);
  }

  calculateWorkTime(worktimeBox) {
    const parsedTimes = this.parser.parseAttentanceTimestamps(worktimeBox);
    this.workStats = this.timeCalculator.calculateWorkingHours(parsedTimes);

    this.hoursWorked = moment(this.workStats.hoursWorked).format('HH:mm');
    if (!this.workStats.isOvertime) {
      this.timeLeft = this.workStats.timeLeft.humanize();
      this.timeToReachMin = moment(this.workStats.timeToReachMin).format('HH:mm');
    } else {
      this.overtime = this.workStats.overtime.humanize();
    }
  }
}
