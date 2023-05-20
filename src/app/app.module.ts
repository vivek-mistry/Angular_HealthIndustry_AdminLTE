import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './master/sidebar/sidebar.component';
import { HeaderComponent } from './master/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './master/main/main.component';
import { DemoComponent } from './pages/demo/demo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentListComponent } from './pages/department-list/department-list.component';
import { DepartmentEditComponent } from './pages/department-edit/department-edit.component';
import { DepartmentAddComponent } from './pages/department-add/department-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    DemoComponent,
    DashboardComponent,
    DepartmentListComponent,
    DepartmentEditComponent,
    DepartmentAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
