import { Component } from '@angular/core';

@Component({
  selector: 'app-may',
  imports: [],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May {
  monthData: string[] = Array(31).fill('none');

  // Positions for 5 flowers on the branch
  flowers = [
    { x: 60, y: 60, petals: 6, startIdx: 0 },
    { x: 140, y: 50, petals: 6, startIdx: 6 },
    { x: 100, y: 110, petals: 7, startIdx: 12 }, // Center flower
    { x: 50, y: 150, petals: 6, startIdx: 19 },
    { x: 150, y: 160, petals: 6, startIdx: 25 }
  ];

  getPetalTransform(flowerX: number, flowerY: number, petalIdx: number, total: number): string {
    const angle = (petalIdx * 360) / total;
    return `rotate(${angle}, ${flowerX}, ${flowerY})`;
  }

  getMoodColor(dayIndex: number): string {
    const mood = this.monthData[dayIndex];
    const palette: Record<string, string> = {
      'great': '#FF69B4', // Hot Pink
      'good': '#FFB7C5',  // Sakura Pink
      'meh': '#FADADD',   // Pale Pink
      'bad': '#D8BFD8',   // Thistle/Muted Purple
      'none': '#FDFEFE'   // Almost White
    };
    return palette[mood] || palette['none'];
  }

}
