import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../view-model/employee.vm'
import { EmployeeService } from '../../../shared/services/employee/employee.service'

import { JobTitle } from '../../../view-model/job-tittle.vm'
import { JobTitleService } from '../../../shared/services/job-title/job-title.service'

import { SalaryCoService } from '../../../shared/services/salary-coefficient/salary-co.service'
import { SalaryCoefficient } from '../../../view-model/salary-co.vm'

import { TeamService } from '../../../shared/services/team/team.service'
import { Team } from '../../../view-model/team.vm'

import { PhoneNumberService } from '../../../shared/services/phone-number/phone-number.service'
import { PhoneNumber } from '../../../view-model/phone-number.vm'

import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, FormArray, Validators} from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
  
})
export class EmployeeEditComponent implements OnInit {
  update_employee: FormGroup;
  update_employees_2: FormGroup;
  sub : any;
  private employee : Employee;
  private employeeID;
  jobTitles: JobTitle[] = [];
  salaryCoefficients : SalaryCoefficient[] = [];
  teams: Team[] = [];

  submitted = false;

  phoneContactID = -1;

  constructor(private route: ActivatedRoute, 
    private builder: FormBuilder,
    private employeeService : EmployeeService,
    private jobTitleService : JobTitleService,
    private salaryCoService : SalaryCoService,
    private teamService : TeamService,
    private phoneNumberService : PhoneNumberService,
    private router : Router) { }

  ngOnInit(): void {
    this.getJobTitles();
    this.getSalaryCoefficients();
    this.getTeams();
    this.update_employee = this.builder.group({
      firstName: new FormControl(null, []),
      lastName: new FormControl(null, []),
      gender: new FormControl(null, []),
      address: new FormControl(null, []),
      nationalityID: new FormControl(null, []),
      birthDate: new FormControl(null, []),
      phoneNumber: ['', Validators.compose(
        [RxwebValidators.mask({mask:'999 999 9999' })]
      ) ], 
      emergencyCall: ['', Validators.compose(
        [RxwebValidators.mask({mask:'999 999 9999' })]
      ) ], 
      email: ['', [Validators.email]],
      maritalStatus: new FormControl(null, []),
      username: new FormControl(null, []),
      password: new FormControl(null, []),
  });

    this.update_employees_2 = this.builder.group({
      employeeStatus: new FormControl(null, []),
      jobTitle: new FormControl(null, []),
      department: new FormControl(null, []),
      employeeType: new FormControl(null, []),
      salaryCoefficient: new FormControl(null, []),
      manager: new FormControl(null, []),
    });
  

    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.employeeID = params['id'];
     // Retrieve EmployeeDetails with Id route param
     if (this.employeeID !== undefined) {
       

       // Gender
       // Marital status
       // job-titles?
       // Employee type

       // Account?
        this.employeeService.getEmployee(this.employeeID).subscribe((res:any)=>{
          this.employee = res;
          // Phone-contact
          this.phoneContactID = this.employee.phone_contact.id;
          if (this.employee!=null)
          {
            if (this.update_employee !=null)
            {
              this.update_employee.controls['firstName'].setValue(this.employee.first_name);
              this.update_employee.controls['lastName'].setValue(this.employee.last_name);
              this.update_employee.controls['gender'].setValue(this.employee.gender); 
              this.update_employee.controls['address'].setValue(this.employee.address);
              this.update_employee.controls['nationalityID'].setValue(this.employee.national_id);
              this.update_employee.controls['birthDate'].setValue(this.employee.birth_date);

              this.update_employee.controls['phoneNumber'].setValue(this.employee.phone_contact.personal_call); // ***
              this.update_employee.controls['emergencyCall'].setValue(this.employee.phone_contact.emergency_call); // ***
              this.update_employee.controls['email'].setValue(this.employee.email);
              this.update_employee.controls['maritalStatus'].setValue(this.employee.marital_status); 
            }
            if (this.update_employees_2 != null)
            {
              //this.update_employees_2.controls['employeeStatus'].setValue(this.employee.first_name); // To-do
              this.update_employees_2.controls['jobTitle'].setValue(this.employee.job_title.id);
              this.update_employees_2.controls['department'].setValue(this.employee.involved_teams[0].team_id);
              this.update_employees_2.controls['employeeType'].setValue(this.employee.employ_type);
              this.update_employees_2.controls['salaryCoefficient'].setValue(this.employee.salary_coefficient.id);
              //this.update_employees_2.controls['manager'].setValue(this.employee.manager_id); // To-do
            }
          }
        })

     }

  });

  }

  
  get f() { return this.update_employee.controls; }

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

  updateEmployee1(): void {
    this.submitted = true;
    // if (this.update_employee.invalid) {
    //   return;
    // }
    this.updatePhoneNumber();

    let employee_data = {
      'employee_id': this.employeeID,
      'first_name': this.update_employee.get('firstName').value,  
      'last_name': this.update_employee.get('lastName').value,
      'gender': this.update_employee.get('gender').value,
      'address': this.update_employee.get('address').value,
      'national_id': this.update_employee.get('nationalityID').value,
      //'birth_date': this.update_employee.get('birthDate').value, LỖI
      'email': this.update_employee.get('email').value,
      'marital_status': this.update_employee.get('maritalStatus').value,
    };
    this.employeeService.updateEmployee(employee_data).subscribe(res => {
      // if (res.success && res.data) {
      //   alert("Update employee Successfully !");
        
      // }
      alert("Update employee Successfully !");
      console.log(res);
      let empPath = '/employee/' + this.employee.id;
      this.router.navigateByUrl(empPath);
    }, err => {
      alert("Error creating employee !");
    })
  }

  updatePhoneNumber()
  {
    if (this.phoneContactID != -1)
    {
      let phone_data = {
        'phone_id': this.phoneContactID,
        'emergency_call': this.update_employee.get('phoneNumber').value,  
        'personal_call': this.update_employee.get('emergencyCall').value,
      };
      this.phoneNumberService.updatePhoneNumber(phone_data).subscribe(data=>{
        if(data!=null){
          console.log("Update Phone contact successfully ");
        }
      });
    }
  }

  updateAccount() {

  }
}
