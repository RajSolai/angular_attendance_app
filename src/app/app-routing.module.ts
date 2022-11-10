import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDesignationDetailsComponent } from './employee-designation-details/employee-designation-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginManagementComponent } from './login-management/login-management.component';
import { PaymentRulesMangementComponent } from './payment-rules-mangement/payment-rules-mangement.component';
import { RequestLeaveManagementComponent } from './request-leave-management/request-leave-management.component';

const routes: Routes = [
  {
    path: '',
    component: LoginManagementComponent,
  },
  {
    path: 'request',
    component: RequestLeaveManagementComponent,
  },
  {
    path: 'payment',
    component: PaymentRulesMangementComponent,
  },
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent,
  },
  {
    path: 'employeeDsgDetails',
    component: EmployeeDesignationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
