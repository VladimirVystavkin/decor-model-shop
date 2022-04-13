import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {AppModule} from "../app.module";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DashboardPageComponent,
    AdminLayoutComponent,
    LoginPageComponent,
    CreatePageComponent,
    EditPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'create', component: CreatePageComponent},
        {path: 'edit', component: EditPageComponent},
        {path: 'dashboard', component: DashboardPageComponent},

      ]

    }])
  ],
  exports: [
    RouterModule

  ],
  providers: []

}) export class AdminModule {
}
