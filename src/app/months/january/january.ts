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
  // We define 30 shards along a line from x=30 to x=170
  shards = Array.from({ length: 30 }, (_, i) => ({
    x: 35 + (i * 4.5), // Distribute along the x-axis
    y: 150 + (Math.sin(i) * 3), // Slight wavy baseline
    height: 40 + (Math.random() * 30),
    width: 6 + (Math.random() * 4),
    tilt: (Math.random() * 20) - 10 // Random tilt between -10 and 10 degrees
  }));

  getShardPath(h: number, w: number): string {
    // Sharp, needle-like crystal
    return `M 0 0 L ${w / 2} ${-h * 0.3} L 0 ${-h} L ${-w / 2} ${-h * 0.3} Z`;
  }

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#00B4D8', 'good': '#90E0EF',
      'meh': '#CAF0F8', 'none': '#F8FBFF'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }

}
