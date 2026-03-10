import { Component } from '@angular/core';

@Component({
  selector: 'app-august',
  imports: [],
  templateUrl: './august.html',
  styleUrl: './august.scss',
})
export class August {
  // Array of 31 days with mood values (0-4 or hex codes)
  monthData: any[] = Array(31).fill(null);

  getPetalTransform(index: number): string {
    const angle = index * (360 / 31);
    return `rotate(${angle}, 100, 100)`;
  }

  getMoodColor(dayIndex: number): string {
    const mood = this.monthData[dayIndex];
    // Default "untracked" color is a pale, transparent yellow
    if (!mood) return '#FEF9E7';

    // Example August Palette (Yellows/Browns)
    const colors: any = {
      'happy': '#FFD700', // Gold
      'calm': '#F4D03F',  // Sunflower Yellow
      'sad': '#B19470',   // Muted Brown
      'angry': '#E67E22', // Burnt Orange
    };
    return colors[mood] || '#FFD700';
  }

}
