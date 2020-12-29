import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesRoutingModule } from '../employees-routing.module';
import { MatCardModule } from '@angular/material/card';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    EmployeesRoutingModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeEditModule { }
