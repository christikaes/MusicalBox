import { Component, OnInit } from '@angular/core';
import { BoxDbService } from '../box-db.service';

@Component({
  selector: 'app-music-box-list',
  templateUrl: './music-box-list.component.html',
  styleUrls: ['./music-box-list.component.scss']
})
export class MusicBoxListComponent implements OnInit {
  public myMusicalBoxList$ = this.boxDbService.myMusicalBoxList$;
  public publicMusicalBoxList$ = this.boxDbService.publicMusicalBoxList$;

  constructor(private boxDbService: BoxDbService) { }

  ngOnInit() {
  }

}
