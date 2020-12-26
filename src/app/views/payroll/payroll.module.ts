import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRollRoutingModule } from './payroll-routing.module'
import { PayrollComponent } from './payroll.component'

@NgModule({
  declarations: [PayrollComponent],
  imports: [
    CommonModule,
    PayRollRoutingModule
  ]
})
export class PayrollModule { }
