import { Component } from '@angular/core';

@Component({
  selector: 'app-june',
  standalone: true, // Standard for modern Angular
  imports: [],
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  // 3 rings of leaves to total 30 days
  // Ring 1: 6 leaves, Ring 2: 10 leaves, Ring 3: 14 leaves
  rings = [
    { count: 6, radius: 40, size: 0.8 },
    { count: 10, radius: 80, size: 1.1 },
    { count: 14, radius: 130, size: 1.5 }
  ];

  userMoods: string[] = new Array(31).fill('Neutral');

  // Calculates the day index based on which ring and leaf we are on
  getDayIndex(ringIndex: number, leafIndex: number): number {
    let previousLeaves = 0;
    for (let i = 0; i < ringIndex; i++) {
      previousLeaves += this.rings[i].count;
    }
    return previousLeaves + leafIndex + 1;
  }

  getMoodColor(day: number): string {
    // Using your established chocolate palette
    const colors: any = {
      'Wonderful': '#FFF5E1',
      'Productive': '#A1887F',
      'Neutral': '#E0E0E0', // Base succulent green/gray
      'Tired': '#5D4037',
      'Stressed': '#3E2723'
    };
    return colors[this.userMoods[day]] || '#E0E0E0';
  }
}