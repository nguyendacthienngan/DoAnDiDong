import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateCandidateModule } from './create-candidate/create-candidate.module'
  
@NgModule({
  declarations: [CandidateComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule,
    CreateCandidateModule
  ],
  exports: [
    CandidateComponent
  ]
})
export class CandidateModule { }
