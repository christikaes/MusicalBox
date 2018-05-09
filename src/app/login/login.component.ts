import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loggedIn$ = this.authService.loggedIn;

  constructor(private dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.dialog.open(LoginDialogComponent);
  }

  logout() {
    this.authService.logout();
  }
}
