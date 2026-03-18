import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-may',
  imports: [],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May {
  // Updated logic for the component
  private _utilsService = inject(UtilsService);
  private _monthData = this._utilsService.monthDays; // Assuming this returns an array of ~30 days
  // Number of days to track. Typically ~30. 
  // Assuming this is imported from a central service.
  numDays = 31; // Example: Mar. 2026 has 31 days

  // Set your tracking year
  trackerYear = '2026';

  // Colors for the mood indicators (can be clicked or loaded)
  moodColors: Record<number, string> = {
    // Example: 1: 'meh', 2: 'great'
  };

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#FF69B4', // Deep pink
      'good': '#FFB7C5',  // Lighter pink
      'meh': '#FADADD',   // Very pale pink
      'none': '#FFFFFF'   // Empty/white (matches image)
    };

    const mood = this.moodColors[idx] || 'none';
    return palette[mood] || palette['none'];
  }

  // Generate the positioning logic for ~30 scattered items (hearts)
  get trackItems() {
    const rowSize = 5; // A grid of roughly 5 columns
    return Array.from({ length: this.numDays }, (_, i) => {
      // Basic Grid Placement (starting below the branch)
      const col = i % rowSize;
      const row = Math.floor(i / rowSize);

      // Add randomness/waviness for "bullet journal" hand-drawn look
      const wave = Math.sin(i * 0.5) * 6;
      const randomOffset = (Math.random() - 0.5) * 8;

      return {
        index: i + 1,
        x: 35 + col * 42 + wave + randomOffset, // Columns with wave/randomness
        y: 160 + row * 45 + wave // Rows starting lower on page
      };
    });
  }
}
