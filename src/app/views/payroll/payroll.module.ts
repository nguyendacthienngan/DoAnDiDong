import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayRollRoutingModule } from './payroll-routing.module'
import { PayrollComponent } from './payroll.component'
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PayrollComponent],
  imports: [
    CommonModule,
    PayRollRoutingModule,
    MatTabsModule,
    MatIconModule,
    BsDropdownModule,
    MatDialogModule
  ]
})
export class PayrollModule { }
