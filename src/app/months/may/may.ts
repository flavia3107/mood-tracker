import { Component } from '@angular/core';

@Component({
  selector: 'app-may',
  imports: [],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May {
  monthData: string[] = Array(31).fill('none');

  // We define 6 "Flower Sites" on the branch. 
  // Each site has 5 petals (except one with 6 to make 31 total).
  flowerSites = [
    { x: 55, y: 75, count: 5, start: 0 },
    { x: 85, y: 60, count: 5, start: 5 },
    { x: 120, y: 45, count: 6, start: 10 }, // Top cluster
    { x: 145, y: 75, count: 5, start: 16 },
    { x: 110, y: 95, count: 5, start: 21 },
    { x: 80, y: 115, count: 5, start: 26 }
  ];

  getTransform(x: number, y: number, i: number, total: number): string {
    // Tighter rotation (360/total) with a very small radius (the 'translate' part)
    // This keeps petals touching at the center but spreading at the tips
    const angle = (i * 360) / total;
    return `rotate(${angle}, ${x}, ${y})`;
  }

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#FF69B4', // Hot Pink
      'good': '#FFB7C5',  // Cherry Pink
      'meh': '#FADADD',   // Pale Pink
      'none': '#FFF5F7'   // Unfilled (very soft white-pink)
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
