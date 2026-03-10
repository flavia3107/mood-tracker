import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');

  // Add this to your TypeScript class
  get lightWirePath(): string {
    const points = [];
    const steps = 60; // More steps = smoother curve
    const startY = 35;
    const endY = 175;

    for (let i = 0; i <= steps; i++) {
      const y = startY + (i * (endY - startY) / steps);
      const distanceFromTop = y - 25;

      // Matches the tree's width profile
      const maxWidth = (distanceFromTop * 0.42);

      // The sine wave creates the spiral effect
      // We use a lower frequency (0.4) so it loops around the tree slowly
      const x = 100 + (Math.sin(i * 0.4) * maxWidth);

      points.push({ x, y });
    }

    // Convert points to a smooth Curve path
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const xc = (points[i].x + points[i - 1].x) / 2;
      const yc = (points[i].y + points[i - 1].y) / 2;
      path += ` Q ${points[i - 1].x} ${points[i - 1].y}, ${xc} ${yc}`;
    }
    return path;
  }

  decorations = Array.from({ length: 31 }, (_, i) => {
    const y = 35 + (i * 4.6); // Slightly higher start to clear the star
    const distanceFromTop = y - 25;

    // The 5-tier tree is slightly narrower at the top tiers
    const maxWidth = (distanceFromTop * 0.42);
    const x = 100 + (Math.sin(i * 1.1) * maxWidth); // Faster sin frequency for a "spiraling" look

    return {
      x, y,
      r: i % 4 === 0 ? 4 : 2.5,
    };
  });
  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#FFD700', // Gold
      'good': '#FF3131',  // Bright Red
      'meh': '#4CC9FE',   // Ice Blue
      'none': '#BDE0D0'   // Deep Forest Green (Blends in)
    };
    return palette[mood] || palette['none'];
  }

  generateCurvedPath(): string {
    if (this.decorations.length === 0) return '';

    let path = `M ${this.decorations[0].x} ${this.decorations[0].y}`;

    for (let i = 0; i < this.decorations.length - 1; i++) {
      const start = this.decorations[i];
      const end = this.decorations[i + 1];

      // The "Control Point" is the midpoint horizontally, 
      // but shifted DOWN vertically to create the sag.
      const cpX = (start.x + end.x) / 2;
      const cpY = Math.max(start.y, end.y) + 2; // +2 units of "sag"

      path += ` Q ${cpX} ${cpY} ${end.x} ${end.y}`;
    }

    return path;
  }
}