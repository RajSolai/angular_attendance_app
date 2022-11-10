import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  newEmployeeName: String = '';
  newEmployeePhoneNumber: String = '';
  newEmployeeMail: String = '';
  newEmployeeAddress: String = '';
  employees = [];

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private router: Router,
    private urlService: UrlService
  ) {}

  ngOnInit(): void {}

  addNewEmployee() {
    var emp = {
      employeeID: this.newEmployeeMail,
      employeeName: this.newEmployeeName,
      phoneNumber: this.newEmployeePhoneNumber,
      mailID: this.newEmployeeMail,
      address: this.newEmployeeAddress,
    };
    this.http
      .post(this.urlService.addAnEmployee, emp)
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }

  navigateToDesignation(empId: string) {
    this.storage.empId = empId;
    this.router.navigateByUrl('/employeeDsgDetails');
  }

  getAllEmployees() {
    this.http
      .get(this.urlService.getAllEmployee)
      .toPromise()
      .then((res) => {
        console.log('all_emp', res);
      });
  }
}
