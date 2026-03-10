import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  // Specific star sparkle positions and types, strictly copying the layout of the reference image
  sparkles = [
    { x: 30, y: 40, type: '4pt' }, // Top left
    { x: 170, y: 110, type: '4pt' }, // Mid right
    { x: 50, y: 130, type: '4pt' }, // Mid left
    { x: 170, y: 30, type: '8pt' }, // Top right
    { x: 25, y: 160, type: '8pt' }  // Bot left
    // (Add all other sparkle positions from the image here)
  ];

  // 31 Tracking Ornaments, positioned densely within the tree shape
  ornaments = Array.from({ length: 31 }, (_, i) => {
    const y = 45 + (i * 4); // Keep them tightly clustered
    const widthAtY = (y - 30) * 0.7;
    const x = 100 + (Math.sin(i * 1.6) * (widthAtY * 0.8)); // Zig-zag placement

    return {
      x, y,
      r: i % 4 === 0 ? 5 : 3.5, // Varying sizes
      id: i
    };
  });

  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#FFD700', // Gold
      'good': '#FF3131',  // Christmas Red
      'meh': '#4CC9FE',   // Ice Blue
      'none': '#222222'   // Dark 'Mercury Glass' Color
    };
    return palette[mood] || '#1a1a1a';
  }
}
