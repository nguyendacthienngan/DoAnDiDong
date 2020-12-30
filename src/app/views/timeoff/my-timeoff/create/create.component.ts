import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';

import { DatePipe } from '@angular/common';
import { TimeOffService } from '../../../../shared/services/timeoff/timeoff.service'
import { TimeOff } from '../../../../view-model/time-off.vm'

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
  new_time_off: FormGroup;
  submitted = false;
  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    private builder: FormBuilder,
    private timeOffService : TimeOffService,
    private datePipe: DatePipe) { }


  ngOnInit() {
    this.new_time_off = this.builder.group({
      leaveType: new FormControl(null, []),
      scheduleDateStart: new FormControl(new Date()),
      scheduleDateEnd: new FormControl(new Date()),
      total: new FormControl(null, []),

    });
    
  }

   // convenience getter for easy access to form fields
   get f() { return this.new_time_off.controls; }

  matcher = new MyErrorStateMatcher();

  createTimeOff(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.new_time_off.invalid) {
      return;
    }
    let time_off_data = {
      'start_date': this.new_time_off.get('scheduleDateStart').value,
      'end_date': this.new_time_off.get('scheduleDateEnd').value,
      'leave_type': this.new_time_off.get('leaveType').value,
      'day_off': this.new_time_off.get('total').value,
      'event_name': "Time Off",
      'leave_type_id': 0,
      'event_id': 3,
      'annoucement': 'Time Off',

    };
    time_off_data.start_date = this.datePipe.transform(time_off_data.start_date, 'MM/dd/yyyy');
    time_off_data.end_date = this.datePipe.transform(time_off_data.end_date, 'MM/dd/yyyy');
    

    console.log(time_off_data);

    this.timeOffService.createTimeOff(time_off_data).subscribe(res => {
      alert("Create timeoff Successfully !");
        console.log(res);
      this.dialogRef.close();
    }, err => {
      alert("Error creating timeoff !");
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getLeaveTypes() {

  }

}
