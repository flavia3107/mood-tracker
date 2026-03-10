import { Component } from '@angular/core';

@Component({
  selector: 'app-may',
  imports: [],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May {
  monthData: string[] = Array(31).fill('none');

  // Coordinates for blossom clusters on the tree
  clusters = [
    { x: 100, y: 70, count: 6, start: 0 },  // Top center
    { x: 60, y: 90, count: 5, start: 6 },  // Left mid
    { x: 140, y: 100, count: 5, start: 11 }, // Right mid
    { x: 40, y: 130, count: 5, start: 16 }, // Left low
    { x: 160, y: 140, count: 5, start: 21 }, // Right low
    { x: 105, y: 130, count: 5, start: 26 }  // Inner center
  ];

  getPetalTransform(x: number, y: number, i: number, total: number): string {
    const angle = (i * 360) / total + (i * 5); // Added a slight offset for organic look
    return `rotate(${angle}, ${x}, ${y})`;
  }

  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#FF69B4', // Hot Pink
      'good': '#FFB7C5',  // Sakura Pink
      'meh': '#FADADD',   // Pale Pink
      'bad': '#D8BFD8',   // Muted Lavender
      'none': '#F9F9F9'   // Empty bud
    };
    return palette[mood] || palette['none'];
  }

}
