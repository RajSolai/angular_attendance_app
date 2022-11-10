import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-management',
  templateUrl: './login-management.component.html',
  styleUrls: ['./login-management.component.css'],
})
export class LoginManagementComponent implements OnInit {
  email: string = '';
  pass: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    if (this.email == 'demo@demo.com' && this.pass == 'admin123') {
      this.router.navigateByUrl('/request');
    }
  }
}
