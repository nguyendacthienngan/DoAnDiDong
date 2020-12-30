import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewComponent } from './interview.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
  
@NgModule({
  declarations: [InterviewComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    InterviewComponent,
  ]
})
export class InterviewModule { }
