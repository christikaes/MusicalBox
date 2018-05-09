import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  public email;
  public password;
  public confirmPassword;

  constructor() { }

  ngOnInit() {
  }

  login() {
    alert("Login")
  }

  register() {
    alert("Register")
  }
}
