import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimecalculatorService } from './timecalculator.service';

@NgModule({
  imports: [CommonModule],
  providers: [TimecalculatorService],
  // exports: [TimecalculatorService],
  declarations: []
})
export class CoreModule {}
