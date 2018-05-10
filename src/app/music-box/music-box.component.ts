import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-music-box',
  templateUrl: './music-box.component.html',
  styleUrls: ['./music-box.component.scss']
})
export class MusicBoxComponent implements OnInit {
  @Input() box;
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
  }

  private restart() {
    this.currentNote = 0;
    // Loop through the currentNote index
    const updateNote = () => {
      setTimeout(() => {
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
        updateNote();
      }, 500);
    };
    updateNote();
  }

  public toggleNote(row: number, col: number) {
    const newBox = Object.assign({}, this.box, { data: JSON.parse(JSON.stringify(this.box.data)) });
    newBox.data[row][col] = !newBox.data[row][col];
    // this.updateBox.emit(newBox);
  }


}
