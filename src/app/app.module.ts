import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicBoxComponent } from './music-box/music-box.component';
import { MusicBoxListComponent } from './music-box-list/music-box-list.component';
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicBoxComponent,
    MusicBoxListComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
