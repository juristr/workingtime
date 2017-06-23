import { Injectable } from '@angular/core';

import { ITimeStamp } from '../core';
import * as moment from 'moment';

@Injectable()
export class ParserService {
  // private _regex = /\[E(\d{2}\:\d{2})\]*\[\sU(\d{2}\:\d{2})\]*/g;
  private _regex = /[[E|U](\d{2}\:\d{2})]*/g;

  constructor() { }

  parseAttentanceTimestamps(inputTimes: string): Date[] {
    const matchedTimes = [];

    let match = this._regex.exec(inputTimes);

    while (match != null) {
      for (let i = 1; i < match.length; i++) {
        matchedTimes.push(match[i]);
      }

      match = this._regex.exec(inputTimes);
    }

    return matchedTimes.map(x => moment(x, 'HH:mm').toDate());
  }
}
