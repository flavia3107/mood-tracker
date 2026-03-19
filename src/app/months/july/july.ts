import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
interface Day {
  id: number;
  moodColor: string;
  x: number;
  y: number;
}
@Component({
  selector: 'app-july',
  imports: [],
  templateUrl: './july.html',
  styleUrl: './july.scss',
})
export class July {
  cols = 5;
  hexWidth = 50;
  hexHeight = 58;
  julyDays = signal(Array.from({ length: 31 }, (_, i) => {
    const row = Math.floor(i / this.cols);
    const col = i % this.cols;
    const xSpacing = 52;
    const ySpacing = 45;
    const xOffset = (row % 2 !== 0) ? xSpacing / 2 : 0;

    return {
      id: i + 1,
      x: col * xSpacing + xOffset,
      y: row * ySpacing,
      moodColor: '#fff'
    };
  }));
}
