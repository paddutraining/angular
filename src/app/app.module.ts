import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
