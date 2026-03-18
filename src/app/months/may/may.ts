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

  get flowerTrackers() {
    return Array.from({ length: this._monthData() }, (_, i) => {
      const progress = i / this._monthData();
      return {
        day: i + 1,
        // Spread X across almost the whole 500px width
        x: 40 + (Math.random() * 380),
        // Start lower (y=220) to stay clear of the dense branch
        y: 220 + (progress * 550) + (Math.random() * 60 - 30),
        rotation: Math.random() * 360,
        // Increased scale: 1.2 to 1.5 makes them much larger and clickable
        scale: 1.2 + (Math.random() * 0.3)
      };
    });
  }

  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }
}
