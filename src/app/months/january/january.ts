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
  frostCells = Array.from({ length: 30 }, (_, i) => ({
    // Position along the spine from top-left (20,20) to bottom-right (160,160)
    x: 30 + (i * 5),
    y: 30 + (i * 4.5),
    angle: (i % 2 === 0 ? -45 : 45) + (Math.random() * 10 - 5), // Alternating sides
    scale: 0.6 + (Math.random() * 0.5) // Varied sizes
  }));

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#E0F7FA', // Brilliant White-Blue
      'good': '#B2EBF2',  // Soft Ice
      'meh': '#80DEEA',   // Deep Cold Blue
      'none': 'rgba(255, 255, 255, 0.05)' // Barely visible frost trace
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
