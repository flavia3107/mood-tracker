import { Component } from '@angular/core';

@Component({
  selector: 'app-june',
  standalone: true, // Standard for modern Angular
  imports: [],
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  // Updated rings array for a 30-day month (5 leaves x 6 rings = 30 days)
  rings = [
    { count: 5, radius: 30, size: 0.6 },  // Ring 0 (Center - Days 1-5)
    { count: 5, radius: 60, size: 0.8 },  // Ring 1
    { count: 5, radius: 95, size: 1.0 },  // Ring 2
    { count: 5, radius: 135, size: 1.2 },  // Ring 3
    { count: 5, radius: 180, size: 1.4 },  // Ring 4
    { count: 5, radius: 230, size: 1.6 }   // Ring 5 (Outer - Days 26-30)
  ];

  // Updated helper to calculate the day index
  getDayIndex(ringIndex: number, leafIndex: number): number {
    return (ringIndex * 5) + leafIndex + 1;
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
    return '#E0E0E0';
  }
}