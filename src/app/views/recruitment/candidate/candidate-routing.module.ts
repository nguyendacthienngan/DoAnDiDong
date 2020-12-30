import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateComponent } from './candidate.component'
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component'
import { CandidateEditComponent } from './candidate-edit/candidate-edit.component'

const routes: Routes = [
  {
    path: '',
    component: CandidateComponent,
    data: {
      title: 'Candidates'
    }
  },
  {
    path: 'candidate/:id',
    component: CandidateDetailsComponent,
    data: {
      title: 'Candidate Detail'
    }
  },
  {
    path: 'candidate/edit/:id',
    component: CandidateEditComponent,
    data: {
      title: 'Candidate Detail'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule {}
