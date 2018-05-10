import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoxDbService } from '../box-db.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../app.store';
import { AppActions } from '../app.actions';

@Component({
  selector: 'app-music-box-list',
  templateUrl: './music-box-list.component.html',
  styleUrls: ['./music-box-list.component.scss']
})
export class MusicBoxListComponent implements OnInit {
  public myMusicalBoxList$ = this.boxDbService.myMusicalBoxList$;
  public publicMusicalBoxList$ = this.boxDbService.publicMusicalBoxList$;

  constructor(
    private boxDbService: BoxDbService,
    private ngRedux: NgRedux<IAppState>,
    private appActions: AppActions
  ) { }

  ngOnInit() {
  }

  public setBox(box) {
    this.ngRedux.dispatch(this.appActions.setBox(box));
  }
}
