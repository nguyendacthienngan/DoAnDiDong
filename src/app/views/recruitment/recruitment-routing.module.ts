import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruitmentComponent } from './recruitment.component';
import { CandidateComponent } from './candidate/candidate.component'
import { InterviewComponent } from './interview/interview.component'
import { JobComponent } from './job/job.component'
const routes: Routes = [
  {
    path: '',
    component: RecruitmentComponent,
    data: {
      title: 'Recruitment'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule {}
