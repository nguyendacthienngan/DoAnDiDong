import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { RecruitmentRoutingModule } from './recruitment-routing.module'
import {MatTabsModule} from '@angular/material/tabs';
import { CandidateComponent } from './candidate/candidate.component';
import { CandidateModule } from './candidate/candidate.module';
import { JobComponent } from './job/job.component'
import { JobModule } from './job/job.module'
import { InterviewComponent }  from './interview/interview.component'
import { InterviewModule } from './interview/interview.module'
@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    MatTabsModule,
     CandidateModule,
     JobModule,
     InterviewModule
  ],
  exports: [
     CandidateComponent,
     JobComponent,
    InterviewComponent
  ]
})
export class RecruitmentModule { }
