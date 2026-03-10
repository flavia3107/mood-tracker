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

  getRotation(i: number): string {
    return `rotate(${(i * 360) / 31}, 125, 125)`;
  }

  getMoodColor(i: number): string {
    const mood = this.monthData[i];
    const palette: Record<string, string> = {
      'great': '#FFD700', // Gold
      'good': '#F4D03F',  // Yellow
      'meh': '#D4AC0D',   // Darker Yellow
      'bad': '#997950',   // Brownish
      'none': '#FCF3CF'   // Very pale yellow (empty)
    };
    return palette[mood] || palette['none'];
  }

}
