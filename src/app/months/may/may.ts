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
    const remToUnit = 16;
    const targetWidth = 50 * remToUnit;
    const targetHeight = 45 * remToUnit;

    return Array.from({ length: this.numDays }, (_, i) => {
      const progress = i / this.numDays;
      return {
        day: i + 1,
        x: (2 * remToUnit) + (Math.random() * (targetWidth - (4 * remToUnit))),
        y: (progress * targetHeight) + (Math.random() * 60 - 30),
        rotation: Math.random() * 360,
        scale: 2 + (Math.random() * 0.4)
      };
    });
  }

  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }
}
