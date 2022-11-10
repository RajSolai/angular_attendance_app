import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-employee-designation-details',
  templateUrl: './employee-designation-details.component.html',
  styleUrls: ['./employee-designation-details.component.css'],
})
export class EmployeeDesignationDetailsComponent implements OnInit {
  designationName: string = '';
  departmentName: string = '';
desgs = [];

  constructor(private http: HttpClient, private urlService: UrlService) {}

  ngOnInit(): void {
    this.getAllDesignations();
  }

  getAllDesignations() {
    this.http
      .get(this.urlService.getAllDesignation)
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }

  addNewDesignation() {
    var newDesg = {
      id: 0,
      designationName: this.designationName,
      department: this.departmentName,
    };
    this.http
      .post(this.urlService.addAnDesignation, newDesg)
      .toPromise()
      .then((res) => {
        console.log(res);
      });
  }
}
