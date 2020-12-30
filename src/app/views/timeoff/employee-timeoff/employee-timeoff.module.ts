import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTimeoffComponent } from './employee-timeoff.component'


import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [EmployeeTimeoffComponent],
  imports: [
    CommonModule,
    
    MatIconModule,
    BsDropdownModule,
    MatDialogModule
  ],
  exports: [
    EmployeeTimeoffComponent,
  ]
})
export class EmployeeTimeoffModule { }
