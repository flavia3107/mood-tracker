import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  decorations = Array.from({ length: 31 }, (_, i) => {
    const y = 40 + (i * 4.4); // Start slightly higher, spread slightly more
    const distanceFromTop = y - 25;
    const maxWidth = (distanceFromTop * 0.45); // Reduced multiplier to keep bulbs "safe" inside edges

    // Zig-zag offset
    const x = 100 + (Math.sin(i * 0.9) * maxWidth);
    return {
      x, y,
      r: i % 4 === 0 ? 4.5 : 3,
      isOrnament: i % 4 === 0
    };
  });
  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#FFD700', // Gold
      'good': '#FF3131',  // Bright Red
      'meh': '#4CC9FE',   // Ice Blue
      'none': '#244519'   // Deep Forest Green (Blends in)
    };
    return palette[mood] || palette['none'];
  }
}