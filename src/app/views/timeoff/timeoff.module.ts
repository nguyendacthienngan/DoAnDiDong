import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeOffRoutingModule } from './timeoff-routing.module'
import { TimeoffComponent } from './timeoff.component';
import { MatTabsModule } from '@angular/material/tabs';

import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';

import { MyTimeoffComponent } from './my-timeoff/my-timeoff.component';
import { MyTimeoffModule } from './my-timeoff/my-timeoff.module'

import { TeamTimeoffComponent } from './team-timeoff/team-timeoff.component';
import { TeamTimeoffModule } from './team-timeoff/team-timeoff.module'

import { EmployeeTimeoffComponent } from './employee-timeoff/employee-timeoff.component';
import { EmployeeTimeoffModule } from './employee-timeoff/employee-timeoff.module'
@NgModule({
  declarations: [TimeoffComponent],
  imports: [
    CommonModule,
    TimeOffRoutingModule,
    MatTabsModule,
    MatIconModule,
    BsDropdownModule,
    MatDialogModule,

    MyTimeoffModule,
    TeamTimeoffModule,
    EmployeeTimeoffModule
  ],
  exports: [
    TeamTimeoffComponent,
    MyTimeoffComponent,
    EmployeeTimeoffComponent
  ]
})
export class TimeoffModule { }
