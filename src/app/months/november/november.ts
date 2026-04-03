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
  gap = 1;
  segmentLength = (this.totalPathLength / 30) - this.gap;

  moods: string[] = Array(30).fill('#');

  getMoodColor(day: number): string {
    return this.moods[day];
  }

  updateMood(day: number) {

  }
}
