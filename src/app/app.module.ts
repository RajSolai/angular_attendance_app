import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginManagementComponent } from './login-management/login-management.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeDesignationDetailsComponent } from './employee-designation-details/employee-designation-details.component';
import { PaymentRulesMangementComponent } from './payment-rules-mangement/payment-rules-mangement.component';
import { RequestLeaveManagementComponent } from './request-leave-management/request-leave-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginManagementComponent,
    EmployeeDetailsComponent,
    EmployeeDesignationDetailsComponent,
    PaymentRulesMangementComponent,
    RequestLeaveManagementComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
