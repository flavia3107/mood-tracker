import { Component } from '@angular/core';
interface Point { x: number; y: number; }
@Component({
  selector: 'app-january',
  imports: [],
  templateUrl: './january.html',
  styleUrl: './january.scss',
})
export class January {
  monthData: string[] = Array(31).fill('none');
  // 5 clusters with their own x/y base and shard counts
  clusters = [
    { x: 50, y: 160, count: 6, start: 0, scale: 0.8 }, // Left cluster
    { x: 85, y: 150, count: 6, start: 6, scale: 1.1 }, // Tall mid-left
    { x: 120, y: 165, count: 6, start: 12, scale: 0.7 }, // Small mid-right
    { x: 160, y: 155, count: 6, start: 18, scale: 1.0 }, // Right cluster
    { x: 100, y: 175, count: 6, start: 24, scale: 0.9 }  // Foreground center
  ];

  // Generates a sharp shard path relative to 0,0
  getShardPath(h: number, w: number): string {
    return `M 0 0 L ${w / 2} ${-h / 3} L 2 ${-h} L ${-w / 2} ${-h / 3} Z`;
  }

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#00B4D8', // Deep Blue
      'good': '#90E0EF',  // Light Blue
      'meh': '#CAF0F8',   // Frost
      'none': '#F8FBFF'   // White/Empty
    };
    return palette[this.monthData[idx]] || palette['none'];
  }

}
