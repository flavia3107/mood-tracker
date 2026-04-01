import { Component } from '@angular/core';
@Component({
  selector: 'app-november',
  imports: [],
  templateUrl: './november.html',
  styleUrl: './november.scss',
})
export class November {
  days = Array.from({ length: 30 }, (_, i) => i);
  totalPathLength = 1000;
  gap = 1; // Tiny gap between segments
  segmentLength = (this.totalPathLength / 30) - this.gap;

  // Mood State
  moods: string[] = Array(30).fill('#d5bdaf'); // Default light tan
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
