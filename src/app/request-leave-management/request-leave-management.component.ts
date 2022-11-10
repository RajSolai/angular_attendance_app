import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-leave-management',
  templateUrl: './request-leave-management.component.html',
  styleUrls: ['./request-leave-management.component.css']
})
export class RequestLeaveManagementComponent implements OnInit {

  constructor(private http:HttpClient,private ) { }

  ngOnInit(): void {
  }

  addLeaveRequest(){
    this.http.post()
  }

}
