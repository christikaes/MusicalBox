import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  public email;
  public password;
  public confirmPassword;
  public loading = false;
  public error = '';

  constructor(private authService: AuthService, private dialogRef: MatDialogRef<LoginDialogComponent>) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(res => {
      this.loading = false;
      this.dialogRef.close();
    }, err => {
      this.loading = false;
      this.error = err;
    });
  }

  register() {
    this.loading = true;
    this.authService.register(this.email, this.password).subscribe(res => {
      this.loading = false;
      this.dialogRef.close();
    }, err => {
      this.loading = false;
      this.error = err;
    });
  }
}
