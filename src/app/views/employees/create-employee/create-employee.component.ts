import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher} from '@angular/material/core';
import { EmployeeService } from '../../../shared/services/employee/employee.service'
import { JobTitle } from '../../../view-model/job-tittle.vm'
import { JobTitleService } from '../../../shared/services/job-title/job-title.service'
import { SalaryCoService } from '../../../shared/services/salary-coefficient/salary-co.service'
import { SalaryCoefficient } from '../../../view-model/salary-co.vm'
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { PhoneNumberService } from '../../../shared/services/phone-number/phone-number.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})

export class CreateEmployeeComponent implements OnInit {
  new_employee: FormGroup;
  submitted = false;
  employee: any;
  jobTitles: JobTitle[] = [];
  salaryCoefficients : SalaryCoefficient[] = [];
  phoneNumberId = -1 ;
  constructor(
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    private builder: FormBuilder,
    private employeeService : EmployeeService,
    private jobTitleService : JobTitleService,
    private salaryCoService : SalaryCoService,
    private phoneNumberService : PhoneNumberService) { }


  ngOnInit() {
    this.getJobTitles();
    this.getSalaryCoefficients();
    this.new_employee = this.builder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email]],
        jobTitle: new FormControl(null, []),
        salaryCo: new FormControl(null, []),
        phoneNumber: ['', Validators.compose(
          [RxwebValidators.mask({mask:'999 999 9999' }), Validators.required]
        ) ], 
    });
  }

   // convenience getter for easy access to form fields
   get f() { return this.new_employee.controls; }

  matcher = new MyErrorStateMatcher();

  createEmployee(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.new_employee.invalid) {
      return;
    }
    this.addPhoneNumber(this.new_employee.get('phoneNumber').value);
    if (this.phoneNumberId === -1)
      return;
    let employee_data = {
      'first_name': this.new_employee.get('firstName').value,
      'last_name': this.new_employee.get('lastName').value,
      'email': this.new_employee.get('email').value,
      'job_title_id': this.new_employee.get('jobTitle').value,
      'salary_coefficient_id': this.new_employee.get('salaryCo').value,
      'contact_id' : this.phoneNumberId,
    };
    if (employee_data.job_title_id === null)
    {
      employee_data.job_title_id = this.jobTitles[0].id;
    }
    if (employee_data.salary_coefficient_id === null)
    {
      employee_data.salary_coefficient_id = this.salaryCoefficients[0].id;
    }
    console.log(employee_data);


    this.employeeService.createEmployee(employee_data).subscribe(res => {
      if (res.success && res.data) {
        alert("Create employee Successfully !");
        console.log(res);
      }
      //this.dialogRef.close();
      console.log(res);
    }, err => {
      alert("Error creating employee !");
    })
  }

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

  addPhoneNumber(phoneNum : any) {
    if (phoneNum === null)
    return;
    let phone_data = {
      'emergency_call': phoneNum,
      'personal_call' : phoneNum
    }
    this.phoneNumberService.createPhoneNum(phone_data).subscribe(res => {
      this.phoneNumberId = res.id;
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
