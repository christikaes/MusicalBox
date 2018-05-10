import { Component } from '@angular/core';
import { BoxDbService } from './box-db.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './app.store'
import { AppActions } from './app.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private boxDbService: BoxDbService, private ngRedux: NgRedux<IAppState>, private appActions: AppActions) { }

  get newBox() {
    return {
      name: 'My Musical Box',
      public: false,
      data: new Array(8).fill(new Array(25).fill(false)),
      id: null
    };
  }

  addNewBox() {
    this.updateBox(this.newBox);
  }

  updateBox(box) {
    this.boxDbService.updateBox$(box).subscribe(updatedBox => {
      this.ngRedux.dispatch(this.appActions.setBox(updatedBox));
    }, err => {
      console.log(err);
    });
  }
}
