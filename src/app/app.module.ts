import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { ReversePipe } from './reverse.pipe';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
AppComponent,
ShortenPipe,
ReversePipe,
FilterPipe,
SortPipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
