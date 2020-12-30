import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data : {
      title : 'Hello '
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./views/employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: 'recruitment',
        loadChildren: () => import('./views/recruitment/recruitment.module').then(m => m.RecruitmentModule)
      },
      {
        path: 'timeoff',
        loadChildren: () => import('./views/timeoff/timeoff.module').then(m => m.TimeoffModule)
      },
      {
        path: 'payroll',
        loadChildren: () => import('./views/payroll/payroll.module').then(m => m.PayrollModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./views/calendar/calendar.module').then(m => m.CalendarModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
