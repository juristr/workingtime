import { TestBed, inject } from '@angular/core/testing';

import { ITimeStamp } from '../core';
import { ParserService } from './parser.service';

import * as moment from 'moment';

describe('ParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParserService]
    });
  });

  it('should be created', inject([ParserService], (service: ParserService) => {
    expect(service).toBeTruthy();
  }));

  it('should correctly parse the input time into slices', inject([ParserService], (service: ParserService) => {
    const inputTime = `E07:45 U12:48
E13:38 U16:45`;
    const resultTimes = service.parseAttentanceTimestamps(inputTime);
    expect(resultTimes.length).toBe(4);

    expect(moment(resultTimes[0]).format('HH:mm')).toEqual('07:45');
    expect(moment(resultTimes[1]).format('HH:mm')).toEqual('12:48');
    expect(moment(resultTimes[2]).format('HH:mm')).toEqual('13:38');
    expect(moment(resultTimes[3]).format('HH:mm')).toEqual('16:45');
  }));

    it('should correctly parse the input time when last exit time is missing', inject([ParserService], (service: ParserService) => {
    const inputTime = `E07:45 U12:48
E13:38`;
    const resultTimes = service.parseAttentanceTimestamps(inputTime);
    expect(resultTimes.length).toBe(3);

    expect(moment(resultTimes[0]).format('HH:mm')).toEqual('07:45');
    expect(moment(resultTimes[1]).format('HH:mm')).toEqual('12:48');
    expect(moment(resultTimes[2]).format('HH:mm')).toEqual('13:38');
  }));

      it('should also only parse two timestamps (like just in the morning)', inject([ParserService], (service: ParserService) => {
    const inputTime = `E07:45 U12:48`;
    const resultTimes = service.parseAttentanceTimestamps(inputTime);
    expect(resultTimes.length).toBe(2);

    expect(moment(resultTimes[0]).format('HH:mm')).toEqual('07:45');
    expect(moment(resultTimes[1]).format('HH:mm')).toEqual('12:48');
  }));

});
