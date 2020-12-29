import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesRoutingModule } from '../employees-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    EmployeesRoutingModule,
    MatCardModule
  ]
})
export class EmployeeDetailsModule { }
