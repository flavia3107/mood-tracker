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
    { x: 140, y: 45, count: 6, start: 0 },
    { x: 100, y: 65, count: 5, start: 6 },
    { x: 160, y: 85, count: 5, start: 11 },
    { x: 65, y: 95, count: 5, start: 16 },
    { x: 120, y: 115, count: 5, start: 21 },
    { x: 175, y: 135, count: 5, start: 26 }
  ];

  getTransform(x: number, y: number, i: number, total: number): string {
    const angle = (i * 360) / total;
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
