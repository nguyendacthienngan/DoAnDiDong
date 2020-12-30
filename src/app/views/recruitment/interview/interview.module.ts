import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ManagerComponent } from './manager/manager.component';
import { ManagerModule } from './manager/manager.module';
import { HrComponent } from './hr/hr.component';
import { CalendarComponent } from './calendar/calendar.component'

import { CalendarModule } from './calendar/calendar.module'
import { HrModule } from './hr/hr.module'
@NgModule({
  declarations: [InterviewComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    ManagerModule,
    HrModule,
    CalendarModule
  ],
  exports: [
    InterviewComponent,
    ManagerComponent,
    HrComponent,
    CalendarComponent,
  ]
})
export class InterviewModule { }
