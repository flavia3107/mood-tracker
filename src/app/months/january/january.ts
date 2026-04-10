import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-january',
  templateUrl: './january.html',
  styleUrl: './january.scss',
  imports: [MoodPicker]
})
export class January {
  private _utilService = inject(UtilsService);
  private _selectedColor = '';
  public monthData = this._utilService.monthDays;
  public frostSeeds = this._generateFrostSeeds();

  setMood(day: any) {
    if (this._selectedColor) {
      day['color'] = this._selectedColor;
    }
  }

  private _generateFrostSeeds() {
    const count = this.monthData();
    const seeds: any[] = [];
    const maxAttempts = 200;
    const paddingBase = 20;
    const date = this._utilService.selectedDate();

    for (let i = 0; i < count; i++) {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        const newSeed = {
          x: Math.random() * 300,
          y: 20 + Math.random() * 150,
          rotation: Math.random() * 360,
          scale: 0.7 + Math.random() * 0.1,
          color: this._utilService.getMoodColorForDate(new Date(date.getFullYear(), 0, i + 1))
        };

        const isOverlapping = seeds.some(existing => {
          const dx = existing.x - newSeed.x;
          const dy = existing.y - newSeed.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const collisionThreshold = (existing.scale + newSeed.scale) * paddingBase;
          return distance < collisionThreshold;
        });

        if (!isOverlapping) {
          seeds.push(newSeed);
          placed = true;
        }
        attempts++;
      }
    }

    return seeds;
  }

  public updateMood(color: string) {
    this._selectedColor = color;
  }
}
