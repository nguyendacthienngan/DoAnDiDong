import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { EmployeeService } from '../../../../shared/services/employee/employee.service'
import { Employee } from '../../../../view-model/employee.vm'

import { JobTitleService } from '../../../../shared/services/job-title/job-title.service'
import { JobTitle } from '../../../../view-model/job-tittle.vm'

import { TeamService } from '../../../../shared/services/team/team.service'
import { Team } from '../../../../view-model/team.vm'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { InterviewService } from '../../../../shared/services/interview/interview.service'
import { ScheduleService } from '../../../../shared/services/interview/team-schedule.service'
import { CandidateInterviewService } from '../../../../shared/services/interview/candidate-interview.service'

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  
  datas:any[]=[];
  canInter:any[]=[];
  jobTitles: JobTitle[] = [];
  teams: Team[] = [];
  data: {};
  animal: string;
  name: string;
  constructor(
    private interviewSchedule : InterviewService,
    private scheduleService : ScheduleService,
    private jobTitleService : JobTitleService,
    private canInterviewService : CandidateInterviewService,
    private teamService : TeamService,
    public dialog : MatDialog
    ) { }

  ngOnInit(): void {
    this.getAll();
    this.getJobTitles();
    this.getTeams();
  }

  getAll(){
    this.interviewSchedule.getInterviews().subscribe((res:any)=>{
      this.datas = res;
      console.log(res);
    })
    this.canInterviewService.getCandidateInterviews().subscribe((res:any)=>{
      this.canInter = res;
      console.log(res);
    })
  }

  getJobTitles() {
    this.jobTitleService.getJobTitles().subscribe((res:any)=>{
      this.jobTitles = res;
    })
  }

  getTeams() {
    this.teamService.getTeams().subscribe((res:any)=>{
      this.teams = res;
    })
  }
  onDelete(id: number) {
    // let answer = confirm("Are you sure you want to delete ?");
    // if (answer == true)
    // {
    //   this.interviewSchedule.deleteSchedule(id).subscribe((res:any)=> {
    //     alert('Deleted schedule successfully');
    //   }, err => {
    //     alert("Error deleting schedule !");
    //   })
    // }
  }

  onEdit(id:number){
    // const dialogRef = this.dialog.open(EditComponent, {
    //   width: '30%',
    //   data: {id: id}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
