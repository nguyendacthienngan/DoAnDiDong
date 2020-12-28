import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRollRoutingModule } from './payroll-routing.module'
import { PayrollComponent } from './payroll.component'
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [PayrollComponent],
  imports: [
    CommonModule,
    PayRollRoutingModule,
    MatTabsModule
  ]
})
export class PayrollModule { }
