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
  // Generate an array of objects for each day's position
  // Generate coordinates for the scattered "day" petals
  get fallingPetals() {
    return Array.from({ length: this._monthData() }, (_, i) => {
      return {
        day: i + 1,
        // Creates a scattered layout starting below the branch
        x: 35 + (i % 5) * 40 + (Math.sin(i) * 12),
        y: 130 + Math.floor(i / 5) * 35 + (Math.cos(i) * 8),
        rotation: (i * 137.5) % 360 // Natural-looking random rotation
      };
    });
  }

  getMoodColor(dayIndex: number): string {
    // Replace with your actual mood logic. 
    // Returning #FFFFFF (white) for untracked days to match the photo.
    return '#FFFFFF';
  }
}
