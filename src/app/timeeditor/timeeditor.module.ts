import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdGridListModule, MdCardModule } from '@angular/material';


import { TimeEditComponent } from './time-edit/time-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdGridListModule,
    MdCardModule
  ],
  declarations: [TimeEditComponent],
  exports: [ TimeEditComponent ]
})
export class TimeeditorModule { }
