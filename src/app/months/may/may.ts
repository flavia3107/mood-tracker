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
    const trackers: any[] = [];
    const remToUnit = 16;
    const width = 45 * remToUnit;
    const height = 30 * remToUnit;
    const minDistance = 65;

    for (let i = 0; i < this.numDays; i++) {
      let x = 0, y = 0, collision = true, attempts = 0;

      while (collision && attempts < 50) {
        x = 40 + Math.random() * (width - 80);
        y = 40 + Math.random() * (height - 80);
        collision = trackers.some(other => {
          const dx = x - other.x;
          const dy = y - other.y;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        attempts++;
      }
      trackers.push({
        day: i + 1,
        x,
        y,
        rotation: Math.random() * 360,
        scale: 2.3 + Math.random() * 0.3
      });
    }
    return trackers;
  }

  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }
}
