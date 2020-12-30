import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { JobTitle } from '../../../../../view-model/job-tittle.vm'
import { JobTitleService } from '../../../../../shared/services/job-title/job-title.service'

import { Team } from '../../../../../view-model/team.vm'
import { TeamService } from '../../../../../shared/services/team/team.service'

import { DatePipe } from '@angular/common';
import { ScheduleService } from '../../../../../shared/services/interview/team-schedule.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [DatePipe]
})
export class CreateComponent implements OnInit {
  selectedDate: any;
  new_schedule: FormGroup;
  submitted = false;
  jobTitles: JobTitle[] = [];
  teams : Team[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private builder: FormBuilder,
    private jobTitleService : JobTitleService,
    private scheduleService : ScheduleService,
    private teamService : TeamService,
    private datePipe: DatePipe) { }


  ngOnInit() {
    this.getJobTitles();
    this.getTeams();
    this.new_schedule = this.builder.group({
        jobTitle: new FormControl(null, []),
        team: new FormControl(null, []),
        scheduleDate: new FormControl(new Date())
    });
    
  }

   // convenience getter for easy access to form fields
   get f() { return this.new_schedule.controls; }

  matcher = new MyErrorStateMatcher();

  createSchedule(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.new_schedule.invalid) {
      return;
    }
    let schedule_data = {
      'job_title_id': this.new_schedule.get('jobTitle').value,
      'team_id': this.new_schedule.get('team').value,
      'date': this.new_schedule.get('scheduleDate').value,
    };
    schedule_data.date = this.datePipe.transform(schedule_data.date, 'MM/dd/yyyy');
    if (schedule_data.job_title_id == null)
      schedule_data.job_title_id = this.jobTitles[0].id;

      if (schedule_data.team_id == null)
      schedule_data.team_id = this.teams[0].id;

    console.log(schedule_data);

    this.scheduleService.createSchedule(schedule_data).subscribe(res => {
      alert("Create schedule Successfully !");
        console.log(res);
      this.dialogRef.close();
    }, err => {
      alert("Error creating schedule !");
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
  onNoClick(): void {
    this.dialogRef.close();
  }


}
