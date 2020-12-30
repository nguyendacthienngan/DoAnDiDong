import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { EmployeeService } from '../../../shared/services/employee/employee.service'
import { Employee } from '../../../view-model/employee.vm'

import { JobTitleService } from '../../../shared/services/job-title/job-title.service'
import { JobTitle } from '../../../view-model/job-tittle.vm'

import { TeamService } from '../../../shared/services/team/team.service'
import { Team } from '../../../view-model/team.vm'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(
    ) { }

  ngOnInit(): void {
  }

}
