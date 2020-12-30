import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { EmployeeService } from '../../../../shared/services/employee/employee.service'
import { Employee } from '../../../../view-model/employee.vm'

import { JobTitleService } from '../../../../shared/services/job-title/job-title.service'
import { JobTitle } from '../../../../view-model/job-tittle.vm'

import { TeamService } from '../../../../shared/services/team/team.service'
import { Team } from '../../../../view-model/team.vm'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ScheduleService } from '../../../../shared/services/interview/team-schedule.service'
import { CreateComponent } from './create/create.component'
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  datas:Employee[]=[];
  jobTitles: JobTitle[] = [];
  teams: Team[] = [];
  data: {};
  animal: string;
  name: string;
  constructor(
    private scheduleService : ScheduleService,
    private jobTitleService : JobTitleService,
    private teamService : TeamService,
    public dialog : MatDialog
    ) { }

  openDialog() : void {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  };
  ngOnInit(): void {
    this.getAll();
    this.getJobTitles();
    this.getTeams();
  }

  getAll(){
    this.scheduleService.getSchedules().subscribe((res:any)=>{
      this.datas = res;
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
    let answer = confirm("Are you sure you want to delete ?");
    if (answer == true)
    {
      this.scheduleService.deleteSchedule(id).subscribe((res:any)=> {
        alert('Deleted schedule successfully');
      }, err => {
        alert("Error deleting schedule !");
      })
    }
  }

  onEdit(id:number){
    const dialogRef = this.dialog.open(EditComponent, {
      width: '30%',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
