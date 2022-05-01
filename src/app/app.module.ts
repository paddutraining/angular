import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ActiveComponent } from './active/active.component';
import { InActiveComponent } from './in-active/in-active.component';
import { CounterService } from './counter.service';


@NgModule({
  declarations: [
AppComponent,


ActiveComponent,
InActiveComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
