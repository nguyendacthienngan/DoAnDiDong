import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamTimeoffComponent } from './team-timeoff.component'

import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TeamTimeoffComponent],
  imports: [
    CommonModule,
    MatIconModule,
    BsDropdownModule,
    MatDialogModule
  ],
  exports: [
    TeamTimeoffComponent
  ]
})
export class TeamTimeoffModule { }
