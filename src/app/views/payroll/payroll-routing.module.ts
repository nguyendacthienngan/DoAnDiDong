import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PayrollComponent } from './payroll.component';

const routes: Routes = [
  {
    path: '',
    component: PayrollComponent,
    data: {
      title: 'Payroll'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRollRoutingModule {}
