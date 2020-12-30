import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../view-model/employee.vm'
import { EmployeeService } from '../../../shared/services/employee/employee.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private sub:any;
  private employee : Employee;
  private employeeID;
  constructor(private route: ActivatedRoute, 
    private employeeService : EmployeeService) { }

  ngOnInit(): void {
    // Subscribe to route params
    this.sub = this.route.params.subscribe(params => {
      this.employeeID = params['id'];
     // Retrieve EmployeeDetails with Id route param
     this.employeeService.getEmployee(this.employeeID).subscribe((res:any)=>{
      this.employee = res;
    })
  });

  }

  
}
