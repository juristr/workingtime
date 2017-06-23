
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdToolbarModule} from '@angular/material';
import 'hammerjs';

import { TimeeditorModule } from './timeeditor/timeeditor.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    TimeeditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
