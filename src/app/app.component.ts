import { Component } from '@angular/core';
import { BoxDbService } from './box-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public box = this.newBox;

  constructor(private boxDbService: BoxDbService) { }

  get newBox() {
    return {
      name: 'My Musical Box',
      public: true,
      data: new Array(8).fill(new Array(25).fill(false)),
      id: null
    };
  }

  addNewBox() {
    this.updateBox(this.newBox);
  }

  updateBox(box) {
    this.box = box;
    this.boxDbService.updateBox$(box).subscribe(updatedBox => {
      this.box = updatedBox;
    }, err => {
      console.log(err);
    });
  }

  setBox(box) {
    this.box = box;
  }
}
