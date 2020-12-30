import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'
const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
    data: {
      title: 'Employees'
    }
  },
  {
    path: ':id',
    component: EmployeeDetailsComponent,
    data: {
      title: 'Employee Detail'
    }
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent,
    data: {
      title: 'Employee Detail'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule {}
