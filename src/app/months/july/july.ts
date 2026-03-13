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
  hexHeight = 58; // Distance from top point to bottom point

  // Create the 31 days with pre-calculated positions
  julyDays = signal(Array.from({ length: 31 }, (_, i) => {
    const row = Math.floor(i / this.cols);
    const col = i % this.cols;

    // Horizontal spacing is roughly 3/4 of width for interlocking
    // Vertical spacing is the full height, but rows overlap
    const xSpacing = 52;
    const ySpacing = 45;

    // Offset every odd row to the right to nest the hexagons
    const xOffset = (row % 2 !== 0) ? xSpacing / 2 : 0;

    return {
      id: i + 1,
      x: col * xSpacing + xOffset,
      y: row * ySpacing,
      moodColor: '#FEF3C7' // Initial light honey color
    };
  }));
}
