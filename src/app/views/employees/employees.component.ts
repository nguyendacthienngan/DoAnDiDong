import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee/employee.service'
import { Employee } from '../../view-model/employee.vm'

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeesComponent implements OnInit {
  //datas:Employee[]=[];
  
  constructor(private employeeService : EmployeeService) { }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.employeeService.getEmployees().subscribe((res:any)=>{
      //this.datas = res;
    })
  }
  
}
