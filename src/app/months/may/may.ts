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
    { x: 70, y: 60, start: 0 },
    { x: 155, y: 75, start: 5 },
    { x: 65, y: 105, start: 10 },
    { x: 100, y: 45, start: 15 },
    { x: 140, y: 120, start: 20 },
    { x: 105, y: 90, start: 25 }
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
