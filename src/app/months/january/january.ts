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
  // We generate 30 "ribs" along a diagonal spine
  frostSeeds = Array.from({ length: 31 }, (_, i) => ({
    x: 20 + Math.random() * 160,
    y: 20 + Math.random() * 160,
    rotation: Math.random() * 360,
    scale: 0.4 + Math.random() * 0.5
  }));

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#E0F7FA', // Brightest ice
      'good': '#B2EBF2', // Soft blue
      'meh': '#80DEEA', // Deep cyan
      'none': 'rgba(255, 255, 255, 0.1)' // Trace frost
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
