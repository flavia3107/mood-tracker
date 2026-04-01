import { Component, computed, signal } from '@angular/core';
interface ChestnutDay {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  mood?: string
}
@Component({
  selector: 'app-november',
  imports: [],
  templateUrl: './november.html',
  styleUrl: './november.scss',
})
export class November {
  days = Array.from({ length: 30 }, (_, i) => i);

  // Using pathLength="100" makes this math easy:
  gap = 0.5;
  segmentLength = (100 / 30) - this.gap;

  // Default colors: varying shades of cocoa/tan
  moods: string[] = Array(30).fill('#d5bdaf');
  colors = ['#3c2a21', '#5f4033', '#8b5e3c', '#b08968', '#ddb892'];

  updateMood(day: number) {
    const currentIndex = this.colors.indexOf(this.moods[day]);
    this.moods[day] = this.colors[(currentIndex + 1) % this.colors.length];
  }
}
