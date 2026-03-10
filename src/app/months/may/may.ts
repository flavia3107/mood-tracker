import { Component } from '@angular/core';

@Component({
  selector: 'app-may',
  imports: [],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May {
  monthData: string[] = Array(31).fill('none');
  flowerSites = [
    { x: 60, y: 40, start: 0 },  // Highest, closest to "origin"
    { x: 100, y: 50, start: 5 },
    { x: 140, y: 70, start: 10 },
    { x: 80, y: 85, start: 15 },
    { x: 120, y: 110, start: 20 },
    { x: 160, y: 125, start: 25 }  // Lowest, furthest right
  ];

  getTransform(x: number, y: number, i: number): string {
    const angle = (i * 360) / 5; // Fixed at 5 petals per flower
    return `rotate(${angle}, ${x}, ${y})`;
  }

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#FF69B4', 'good': '#FFB7C5',
      'meh': '#FADADD', 'none': '#FFF5F7'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
