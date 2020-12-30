import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { EmployeeService } from '../../../../shared/services/employee/employee.service'
import { JobTitle } from '../../../../view-model/job-tittle.vm'
import { JobTitleService } from '../../../../shared/services/job-title/job-title.service'
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { PhoneNumberService } from '../../../../shared/services/phone-number/phone-number.service'

import { CandidateService } from '../../../../shared/services/candidate/candidate.service'
import { Candidate } from '../../../../view-model/candidate.vm'


import { CandidateStatusService } from '../../../../shared/services/candidate-status/candidate-status.service'
import { CandidateStatus } from '../../../../view-model/candidate-status.vm'


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  new_candidate: FormGroup;
  submitted = false;
  employee: any;
  jobTitles: JobTitle[] = [];
  candidateStatuses: CandidateStatus[] = [];
  phoneNumberId = -1 ;
  constructor(
    public dialogRef: MatDialogRef<CreateCandidateComponent>,
    private builder: FormBuilder,
    private candidateService : CandidateService,
    private jobTitleService : JobTitleService,
    private phoneNumberService : PhoneNumberService,
    private candidateStatusService : CandidateStatusService) { }


  ngOnInit() {
    this.getJobTitles();
    this.getStatuses();
    this.new_candidate = this.builder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        nationalityID: new FormControl(null, []),
        gender: new FormControl(null, []),
        email: ['', Validators.compose([Validators.email, Validators.required]) ],
        jobTitle: new FormControl(null, []),
        empType: new FormControl(null, []),
        canStatuses: new FormControl(null, []),
        phoneNumber: ['', Validators.compose(
          [RxwebValidators.mask({mask:'999 999 9999' }), Validators.required]
        ) ], 
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.new_candidate.controls; }

  matcher = new MyErrorStateMatcher();

  createCandidate(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.new_candidate.invalid) {
      return;
    }
    let candidate_data = {
      'first_name': this.new_candidate.get('firstName').value,
      'last_name': this.new_candidate.get('lastName').value,
      'national_id': this.new_candidate.get('nationalityID').value,
      'employ_type': this.new_candidate.get('empType').value,
      'position': this.new_candidate.get('jobTitle').value,
      'birth_date': new Date(2000,1,1), //To-do
      'gender': 0, //To-do
      //To-do: phone number
      'candidate_status': this.new_candidate.get('canStatuses').value,
      'email': this.new_candidate.get('email').value,
    };
    
    if (candidate_data.position === null)
    {
      candidate_data.position = this.jobTitles[0].id;
    }
    console.log(candidate_data);


    this.candidateService.createCandidate(candidate_data).subscribe(res => {
      alert("Create candidate Successfully !");
        console.log(res);
      this.dialogRef.close();
    }, err => {
      alert("Error creating candidate !");
    })
  }

  getJobTitles() {
    this.jobTitleService.getJobTitles().subscribe((res:any)=>{
      this.jobTitles = res;
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getStatuses() {
    this.candidateStatusService.getStatuses().subscribe((res : any)=> {
      this.candidateStatuses = res;
    })
  }
}
