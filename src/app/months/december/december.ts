import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  // Defined positions for 31 decorations on the tree
  // 7 larger ornaments, 24 smaller lights
  decorations = [
    // 7 Big Ornaments (Days 1-7)
    { x: 100, y: 60, r: 6, type: 'ornament' },
    { x: 80, y: 90, r: 6, type: 'ornament' },
    { x: 120, y: 100, r: 6, type: 'ornament' },
    { x: 70, y: 130, r: 6, type: 'ornament' },
    { x: 130, y: 135, r: 6, type: 'ornament' },
    { x: 100, y: 115, r: 6, type: 'ornament' },
    { x: 100, y: 160, r: 6, type: 'ornament' },
    // 24 Lights (Days 8-31) scattered across the tree
    ...this.generateLights(24)
  ];

  sparks = this.generateSparks(50); // Generate positions for sparkles

  ngOnInit(): void { }

  private generateLights(count: number) {
    const lights = [];
    for (let i = 0; i < count; i++) {
      // Logic to keep lights within the triangular tree shape
      const y = 50 + Math.random() * 120;
      const widthAtY = (y - 40) * 0.6;
      const x = 100 + (Math.random() * widthAtY * 2 - widthAtY);
      lights.push({ x, y, r: 3.5, type: 'light' });
    }
    return lights;
  }

  private generateSparks(count: number) {
    const sparks = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 200;
      const y = Math.random() * 200;
      const r = Math.random() * 1.5;
      const delay = Math.random() * 4;
      sparks.push({ x, y, r, delay });
    }
    return sparks;
  }

  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#FFD700', // Gold
      'good': '#FF4D4D',  // Christmas Red
      'meh': '#4D94FF',   // Festive Blue
      'none': '#2D5A27'   // Dark Tree Green (Hidden)
    };
    return palette[mood] || '#1a3316';
  }
}
