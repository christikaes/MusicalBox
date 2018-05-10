import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';

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
}
