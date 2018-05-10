import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MusicBoxComponent } from './music-box/music-box.component';
import { MusicBoxListComponent } from './music-box-list/music-box-list.component';
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './/material.module';

// Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Redux
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
declare var require: any;
const persistState = require('redux-localstorage');
import { IAppState, INITITAL_STATE } from './app.store';
import { rootReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MusicBoxComponent,
    MusicBoxListComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    // Material
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // Redux
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    devToolsExtension: DevToolsExtension
  ) {
    ngRedux.configureStore(
      rootReducer,
      INITITAL_STATE,
      [],
      [
        devToolsExtension.enhancer(),
        persistState()
      ]
    );
  }
}
