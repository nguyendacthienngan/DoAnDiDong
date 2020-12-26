import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeOffRoutingModule } from './timeoff-routing.module'
import { TimeoffComponent } from './timeoff.component';

@NgModule({
  declarations: [TimeoffComponent],
  imports: [
    CommonModule,
    TimeOffRoutingModule
  ]
})
export class TimeoffModule { }
