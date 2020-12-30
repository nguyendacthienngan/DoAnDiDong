import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateCandidateModule } from './create-candidate/create-candidate.module';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component'
import { RouterModule } from '@angular/router';
import { CandidatesRoutingModule} from './candidate-routing.module'
import {MatTabsModule} from '@angular/material/tabs';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CandidateComponent, CandidateDetailsComponent, CandidateEditComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    MatIconModule,
    MatDialogModule,
    CreateCandidateModule,
    RouterModule,
    CandidatesRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatTabsModule,
  ],
  exports: [
    CandidateComponent
  ]
})
export class CandidateModule { }
