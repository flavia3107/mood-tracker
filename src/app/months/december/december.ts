import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');

  // We'll place 31 decorations in a winding path from top to bottom
  decorations = Array.from({ length: 31 }, (_, i) => {
    const row = Math.floor(i / 5);
    const col = i % 5;
    const y = 45 + (i * 4.2); // Moves down the tree
    const maxWidth = (y - 30) * 0.7; // Tree gets wider as y increases
    const x = 100 + (Math.sin(i * 0.8) * maxWidth); // Winding zig-zag effect

    return {
      x, y,
      r: i % 4 === 0 ? 5 : 3.5, // Mix of larger ornaments and smaller bulbs
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
