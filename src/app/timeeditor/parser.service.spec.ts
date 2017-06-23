import { TestBed, inject } from '@angular/core/testing';

import { ITimeStamp } from '../core';
import { ParserService } from './parser.service';

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
    let inputTime = `E07:45 U12:48
E13:38`;
    const resultTimes: ITimeStamp = service.parseAttentanceTimestamps(inputTime);


  });

});
