import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  get loggedIn() {
    return this.afAuth.authState.map(user => !!user);
  }

  login(email, password) {
    return fromPromise(this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  register(email, password) {
    return fromPromise(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    return fromPromise(this.afAuth.auth.signOut());
  }
}
