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

  numDays = 31;

  get flowerTrackers() {
    // Define the boundaries of the red square area
    const minX = 50;   // Left padding
    const maxX = 750;  // Right boundary (wide to match your branch)
    const minY = 250;  // Start below the branch
    const maxY = 650;  // Bottom boundary

    return Array.from({ length: this._monthData() }, (_, i) => {
      return {
        day: i + 1,
        // Randomly place within the square bounds
        x: minX + (Math.random() * (maxX - minX)),
        y: minY + (Math.random() * (maxY - minY)),
        // Random rotation for the falling effect
        rotation: Math.random() * 360,
        // Larger scale so they are visible and easy to click
        scale: 1.4 + (Math.random() * 0.3)
      };
    });
  }

  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }
}
