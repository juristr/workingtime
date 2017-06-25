import * as moment from 'moment';

export interface IWorkStats {
  hoursWorked: number;
  timeLeft: moment.Duration;
  overtime: moment.Duration;
  timeToReachMin: moment.Moment;
  isOvertime: boolean;
}
