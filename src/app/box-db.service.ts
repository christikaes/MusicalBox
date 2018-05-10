import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';
import { _throw } from 'rxjs/observable/throw';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Injectable({
  providedIn: 'root'
})
export class BoxDbService {

  constructor(private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  // Returns an observable of all of the current player's musical boxes
  get myMusicalBoxList$() {
    return new Observable(observer => {
      this.afAuth.authState.subscribe(user => {
        if (user && user.uid) {
          this.afDatabase.list('players/' + user.uid).valueChanges().subscribe(games => {
            observer.next(Object.values(games));
          });
        } else {
          observer.next([]);
        }
      });
    });
  }

  // Returns an observable of all the players musical boxes
  get publicMusicalBoxList$() {
    return this.afDatabase.list('players/').valueChanges().map(players => {
      return players.reduce((games: any, player: any) => {
        const playerGames = Object.values(player).filter(game => game.public);
        return [...games, ...playerGames];
      }, []);
    });
  }

  // Adds a new box into the database
  updateBox$(box): any {
    const user = this.afAuth.auth.currentUser;
    if (!user) {
      return _throw('User is not logged in');
    }

    // If the user is logged in
    const uid = user.uid;
    if (box.id) {
      // This is a previously saved box, so update it
      return fromPromise(this.afDatabase.object('players/' + uid + '/' + box.id).set(box)).map(_ => box);
    }
    // This box has not been saved before, so add it
    return fromPromise(this.afDatabase.list('players/' + uid).push(box)).map(newBox => ({ ...box, id: newBox.key }));
  }
}

