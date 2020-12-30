import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component'


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [JobComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    JobComponent
  ]
})
export class JobModule { }
