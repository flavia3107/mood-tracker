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

  // Hexagon spacing constants
  readonly hexSize = 16;
  readonly xSpacing = this.hexSize * 1.732; // sqrt(3)
  readonly ySpacing = this.hexSize * 1.5;

  // The 30 coordinates for the snowflake core
  crystalPositions: Point[] = [
    { x: 100, y: 100 }, // Center (Day 1)

    // Ring 1 (Days 2-7)
    { x: 100, y: 100 - this.ySpacing * 2 / 1.5 },
    { x: 100 + this.xSpacing, y: 100 - this.ySpacing / 2 },
    { x: 100 + this.xSpacing, y: 100 + this.ySpacing / 2 },
    { x: 100, y: 100 + this.ySpacing * 2 / 1.5 },
    { x: 100 - this.xSpacing, y: 100 + this.ySpacing / 2 },
    { x: 100 - this.xSpacing, y: 100 - this.ySpacing / 2 },

    // Ring 2 + Arms (Days 8-30) - Calculated to form a 6-pointed star
    ...this.generateSnowflakeArms(100, 100)
  ];

  private generateSnowflakeArms(cx: number, cy: number): Point[] {
    const pts: Point[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60) * (Math.PI / 180);
      // Adding two cells per "arm" to reach 30
      pts.push({
        x: cx + Math.cos(angle - Math.PI / 2) * (this.ySpacing * 2.6),
        y: cy + Math.sin(angle - Math.PI / 2) * (this.ySpacing * 2.6)
      });
      pts.push({
        x: cx + Math.cos(angle - Math.PI / 2) * (this.ySpacing * 4),
        y: cy + Math.sin(angle - Math.PI / 2) * (this.ySpacing * 4)
      });
      // Fillers for ring 2
      const nextAngle = ((i + 1) * 60 - 30) * (Math.PI / 180);
      pts.push({
        x: cx + Math.cos(nextAngle) * (this.xSpacing * 1.7),
        y: cy + Math.sin(nextAngle) * (this.xSpacing * 1.7)
      });
    }
    return pts.slice(0, 23); // Truncate to exactly 23 points + 7 from core = 30
  }

  getHexPoints(x: number, y: number): string {
    let points = "";
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i - 30);
      const px = x + (this.hexSize - 1) * Math.cos(angle);
      const py = y + (this.hexSize - 1) * Math.sin(angle);
      points += `${px},${py} `;
    }
    return points;
  }

  getMoodColor(idx: number): string {
    const mood = this.monthData[idx];
    const palette: Record<string, string> = {
      'great': '#5DADE2', // Deep Ice Blue
      'good': '#AED6F1',  // Sky Blue
      'meh': '#D6EAF8',   // Light Frost
      'bad': '#ABB2B9',   // Slush Grey
      'none': '#FBFCFC'   // Snow White
    };
    return palette[mood] || palette['none'];
  }

}
