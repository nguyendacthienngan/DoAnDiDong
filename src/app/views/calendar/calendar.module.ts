import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarRoutingModule } from './calendar-routing.module'
import { CalendarComponent } from './calendar.component'
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatTabsModule
  ]
})
export class CalendarModule { }
