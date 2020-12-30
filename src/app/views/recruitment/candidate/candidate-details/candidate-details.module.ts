import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesRoutingModule } from '../candidate-routing.module';
import { MatCardModule } from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CandidateDetailsComponent} from './candidate-details.component'
import {NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [CandidateDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    CandidatesRoutingModule,
    MatCardModule,
    NgbModule,
    NgbNavModule
  ]
})
export class CandidateDetailsModule { }
