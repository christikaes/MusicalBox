import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-music-box',
  templateUrl: './music-box.component.html',
  styleUrls: ['./music-box.component.scss']
})
export class MusicBoxComponent implements OnInit {
  @Output() updateBox = new EventEmitter();
  @select() private box$: Observable<any>;

  public box;
  public currentNote = 0;

  public soundPack = [
    '/assets/music/piano-a.mp3',
    '/assets/music/piano-b.mp3',
    '/assets/music/piano-c.mp3',
    '/assets/music/piano-d.mp3',
    '/assets/music/piano-e.mp3',
    '/assets/music/piano-f.mp3',
    '/assets/music/piano-g.mp3',
  ];

  constructor() {
  }

  ngOnInit() {
    this.restart();
    this.box$.subscribe(newBox => {
      this.box = newBox;
      this.restart();
    });
  }

  get disabled() {
    return this.box.public;
  }

  private restart() {
    this.currentNote = 0;
    // Loop through the currentNote index
    const updateNote = () => {
      setInterval(() => {
        this.currentNote++;
        if (this.currentNote === this.box.data[0].length) {
          this.currentNote = 0;
        }
        // Play the sounds that are on
        this.box.data.forEach((row, index) => {
          if (row[this.currentNote]) {
            const audio = new Audio(this.soundPack[index]);
            audio.play();
          }
        });
      }, 500);
    };
    updateNote();
  }

  public toggleNote(row: number, col: number) {
    const newBox = {
      ...this.box,
      data: JSON.parse(JSON.stringify(this.box.data))
    };
    newBox.data[row][col] = !newBox.data[row][col];
    this.updateBox.emit(newBox);
  }

}
