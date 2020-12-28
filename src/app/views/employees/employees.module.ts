import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateEmployeeModule } from './create-employee/create-employee.module'

import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    BsDropdownModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    CreateEmployeeModule
  ],
})
export class EmployeesModule { }
