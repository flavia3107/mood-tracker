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

  // pathLength="100" math
  gap = 0.5;
  segmentLength = (100 / 30) - this.gap;

  // Mood State (Default shades)
  moods: string[] = Array(30).fill('#d5bdaf');

  // Cocoa & Chocolate Palette
  colors = ['#3c2a21', '#5f4033', '#8b5e3c', '#b08968', '#ddb892'];

  getMoodColor(day: number): string {
    return this.moods[day];
  }

  updateMood(day: number) {
    const currentIndex = this.colors.indexOf(this.moods[day]);
    const nextIndex = (currentIndex + 1) % this.colors.length;
    this.moods[day] = this.colors[nextIndex];
  }
}
