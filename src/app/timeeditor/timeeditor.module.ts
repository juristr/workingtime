import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdInputModule, MdGridListModule, MdCardModule } from '@angular/material';

import { CoreModule } from '../core/';

import { TimeEditComponent } from './time-edit/time-edit.component';
import { ParserService } from './parser.service';

@NgModule({
  imports: [CommonModule, MdInputModule, MdGridListModule, MdCardModule, CoreModule],
  declarations: [TimeEditComponent],
  providers: [ParserService],
  exports: [TimeEditComponent]
})
export class TimeeditorModule {}
