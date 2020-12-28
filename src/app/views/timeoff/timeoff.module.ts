import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeOffRoutingModule } from './timeoff-routing.module'
import { TimeoffComponent } from './timeoff.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [TimeoffComponent],
  imports: [
    CommonModule,
    TimeOffRoutingModule,
    MatTabsModule,
    MatIconModule
  ]
})
export class TimeoffModule { }
