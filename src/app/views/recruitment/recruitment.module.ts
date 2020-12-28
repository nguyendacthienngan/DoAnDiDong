import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitmentComponent } from './recruitment.component';
import { RecruitmentRoutingModule } from './recruitment-routing.module'
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [RecruitmentComponent],
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    MatTabsModule
  ]
})
export class RecruitmentModule { }
