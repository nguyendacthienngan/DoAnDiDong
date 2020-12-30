import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../../../../view-model/candidate.vm'
import { CandidateService } from '../../../../shared/services/candidate/candidate.service'

import { JobTitle } from '../../../../view-model/job-tittle.vm'
import { JobTitleService } from '../../../../shared/services/job-title/job-title.service'

import { SalaryCoService } from '../../../../shared/services/salary-coefficient/salary-co.service'
import { SalaryCoefficient } from '../../../../view-model/salary-co.vm'

import { TeamService } from '../../../../shared/services/team/team.service'
import { Team } from '../../../../view-model/team.vm'

import { PhoneNumberService } from '../../../../shared/services/phone-number/phone-number.service'
import { PhoneNumber } from '../../../../view-model/phone-number.vm'

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, FormArray, Validators} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-candidate-edit',
  templateUrl: './candidate-edit.component.html',
  styleUrls: ['./candidate-edit.component.css']
})
export class CandidateEditComponent implements OnInit {

  update_candidate: FormGroup;
  update_candidates_2: FormGroup;
  sub : any;
  private candidate : Candidate;
  private candidateID;
  jobTitles: JobTitle[] = [];
  salaryCoefficients : SalaryCoefficient[] = [];
  teams: Team[] = [];

  submitted = false;

  phoneContactID = -1;

  constructor(private route: ActivatedRoute, 
    private builder: FormBuilder,
    private candidateService : CandidateService,
    private jobTitleService : JobTitleService,
    private salaryCoService : SalaryCoService,
    private teamService : TeamService,
    private phoneNumberService : PhoneNumberService,
    private router : Router) { }

  ngOnInit(): void {
    this.getJobTitles();
    this.getSalaryCoefficients();
    this.getTeams();
    this.update_candidate = this.builder.group({
      firstName: new FormControl(null, []),
      lastName: new FormControl(null, []),
      nationalityID: new FormControl(null, []),
      email: ['', [Validators.email]],
      phoneNumber: ['', Validators.compose(
        [RxwebValidators.mask({mask:'999 999 9999' })]
      ) ], 
      gender: new FormControl(null, []),
  });

    this.update_candidates_2 = this.builder.group({
      jobTitle: new FormControl(null, []),
      employeeType: new FormControl(null, []),
      candidateStatus: new FormControl(null, []),
    });
  

    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.candidateID = params['id'];
     // Retrieve candidateDetails with Id route param
     if (this.candidateID !== undefined) {
       
        this.candidateService.getCandidate(this.candidateID).subscribe((res:any)=>{
          this.candidate = res;
          console.log(res);
          if (this.candidate!=null)
          {
            if (this.update_candidate !=null)
            {
              this.update_candidate.controls['firstName'].setValue(this.candidate.first_name);
              this.update_candidate.controls['lastName'].setValue(this.candidate.last_name);
              this.update_candidate.controls['gender'].setValue(this.candidate.gender); 
              this.update_candidate.controls['nationalityID'].setValue(this.candidate.national_id);
              this.update_candidate.controls['email'].setValue(this.candidate.email);
              this.update_candidate.controls['phoneNumber'].setValue(this.candidate.phone_no);

            }
            if (this.update_candidates_2 != null)
            {
              this.update_candidates_2.controls['employeeType'].setValue(this.candidate.employ_type);
              this.update_candidates_2.controls['jobTitle'].setValue(this.candidate.position);
              this.update_candidates_2.controls['candidateStatus'].setValue(this.candidate.candidate_state);
            }
          }
        })

     }

  });

  }

  
  get f() { return this.update_candidate.controls; }

  getJobTitles() {
    this.jobTitleService.getJobTitles().subscribe((res:any)=>{
      this.jobTitles = res;
    })
  }
  getSalaryCoefficients() {
    this.salaryCoService.getSalaryCoefficients().subscribe((res:any)=>{
      this.salaryCoefficients = res;
    })
  }

  getTeams() {
    this.teamService.getTeams().subscribe((res:any)=>{
      this.teams = res;
    })
  }

  updateCandidate1(): void {
    this.submitted = true;
    let candidate_data = {
      'candidate_id': this.candidateID,
      'first_name': this.update_candidate.get('firstName').value,  
      'last_name': this.update_candidate.get('lastName').value,
      'gender': this.update_candidate.get('gender').value,
      'national_id': this.update_candidate.get('nationalityID').value,
      'email': this.update_candidate.get('email').value,
      'phone_no': this.update_candidate.get('phoneNumber').value,
    };
    this.candidateService.updateCandidate(candidate_data).subscribe(res => {
      alert("Update candidate Successfully !");
      console.log(res);
      let canPath = '/recruitment/candidate/' + this.candidate.id;
      this.router.navigateByUrl(canPath);
    }, err => {
      alert("Error creating candidate !");
    })
  }


}
