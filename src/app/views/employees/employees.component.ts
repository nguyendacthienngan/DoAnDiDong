import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee/employee.service'
import { Employee } from '../../view-model/employee.vm'
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  datas:Employee[]=[];
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.employeeService.getEmployees().subscribe((res:any)=>{
      this.datas = res;
    })
  }
}
