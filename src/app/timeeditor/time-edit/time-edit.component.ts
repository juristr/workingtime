import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wtm-time-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.css']
})
export class TimeEditComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  amountWorked: string;

  constructor() { }

  ngOnInit() {
  }

  calculateWorkTime(worktimeBox) {
    this.amountWorked = worktimeBox;
  }

}
