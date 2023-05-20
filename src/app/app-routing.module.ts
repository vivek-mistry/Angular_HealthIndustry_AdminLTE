import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './master/main/main.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentAddComponent } from './pages/department-add/department-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
          path: 'department',
          component: DepartmentListComponent
        },
        {
          path: 'department/create',
          component: DepartmentAddComponent
        },
        {
          path: 'demo',
          component: DemoComponent
        },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
