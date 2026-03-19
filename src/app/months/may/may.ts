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
  // Mood colors inspired by the peach/yellow tones in image_21.png
  moods = [
    { label: 'Happy/Excited', color: '#ffaaa5' }, // Peach
    { label: 'Good/Normal', color: '#ffd3b6' },   // Light Orange
    { label: 'Calm/Relaxed', color: '#a8e6cf' }, // Mint Green
    { label: 'Tired/Low', color: '#B0BEC5' },      // Grey
    { label: 'Spooky/Stressed', color: '#9575CD' } // Purple
  ];
  selectedColor = '#ffd3b6'; // Default mood color

  numDays = 31;

  get flowerTrackers() {
    const trackers: any[] = [];
    const remToUnit = 16;
    const width = 40 * remToUnit;
    const height = 23 * remToUnit;
    const minDistance = 60;

    for (let i = 0; i < this.numDays; i++) {
      let x = 0, y = 0, collision = true, attempts = 0;

      while (collision && attempts < 100) {
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
        scale: 2 + Math.random() * 0.3
      });
    }
    return trackers;
  }
  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }

  updateDayMood(index: number) {
    this.flowerTrackers[index].color = this.selectedColor;
  }
}
