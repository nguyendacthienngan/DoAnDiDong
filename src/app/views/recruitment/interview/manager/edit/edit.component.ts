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
import { Schedule } from '../../../../../view-model/schedule.vm'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DatePipe]
})
export class EditComponent implements OnInit {

  selectedDate: any;
  update_schedule: FormGroup;
  submitted = false;
  jobTitles: JobTitle[] = [];
  teams : Team[] = [];
  schedule: Schedule;
  schedule_id: number;
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    private builder: FormBuilder,
    private jobTitleService : JobTitleService,
    private scheduleService : ScheduleService,
    private teamService : TeamService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { 

    }


  ngOnInit() {
    this.schedule_id = this.data.id;
    this.getJobTitles();
    this.getTeams();
    this.update_schedule = this.builder.group({
        jobTitle: new FormControl(null, []),
        team: new FormControl(null, []),
        scheduleDate: new FormControl(new Date())
    });
    if (this.schedule_id !== undefined) {
       
      this.scheduleService.getSchedule(this.schedule_id).subscribe((res:any)=>{
        this.schedule = res;
        console.log(res);
        if (this.schedule!=null)
        {
          if (this.update_schedule !=null)
          {
            this.update_schedule.controls['team'].setValue(this.schedule.team_id);
            this.update_schedule.controls['jobTitle'].setValue(this.schedule.position);
            this.update_schedule.controls['scheduleDate'].setValue(this.schedule.date); 
          }
        }
      })

   }
  }

   // convenience getter for easy access to form fields
   get f() { return this.update_schedule.controls; }

  matcher = new MyErrorStateMatcher();

  updateSchedule(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.update_schedule.invalid) {
      return;
    }
    let schedule_data = {
      'schedule_id': this.schedule_id,
      'job_title_id': this.update_schedule.get('jobTitle').value,
      'team_id': this.update_schedule.get('team').value,
      'date': this.update_schedule.get('scheduleDate').value,
    };
    schedule_data.date = this.datePipe.transform(schedule_data.date, 'MM/dd/yyyy');
    if (schedule_data.job_title_id == null)
      schedule_data.job_title_id = this.jobTitles[0].id;

      if (schedule_data.team_id == null)
      schedule_data.team_id = this.teams[0].id;

    console.log(schedule_data);

    this.scheduleService.updateSchedule(schedule_data).subscribe(res => {
      alert("Update schedule Successfully !");
        console.log(res);
      this.dialogRef.close();
    }, err => {
      alert("Error updating schedule !");
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
