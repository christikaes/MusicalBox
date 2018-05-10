import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public box = this.newBox;

  get newBox() {
    return {
      name: 'My Musical Box',
      public: true,
      data: [[0, 1], [1, 0]], // new Array(8).fill(new Array(25).fill(false)),
      id: null,
      soundPack: 'piano'
    };
  }

  setBox(box) {
    this.box = box;
  }
}
