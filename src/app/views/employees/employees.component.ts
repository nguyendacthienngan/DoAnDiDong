import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { EmployeeService } from '../.././shared/services/employee/employee.service'
import { Employee } from '../.././view-model/employee.vm'

import { JobTitleService } from '../.././shared/services/job-title/job-title.service'
import { JobTitle } from '../.././view-model/job-tittle.vm'

import { TeamService } from '../.././shared/services/team/team.service'
import { Team } from '../.././view-model/team.vm'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateEmployeeComponent } from './create-employee/create-employee.component'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {
  datas:Employee[]=[];
  jobTitles: JobTitle[] = [];
  teams: Team[] = [];
  data: {};
  animal: string;
  name: string;
  constructor(
    private employeeService : EmployeeService,
    private jobTitleService : JobTitleService,
    private teamService : TeamService,
    public dialog : MatDialog
    ) { }

    openDialog() : void {
      const dialogRef = this.dialog.open(CreateEmployeeComponent, {
        width: '30%',
        data: {name: this.name, animal: this.animal}
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
    this.employeeService.getEmployees().subscribe((res:any)=>{
      this.datas = res;
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
}