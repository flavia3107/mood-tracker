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
  public monthData = this._utilService.monthDays;
  public frostSeeds = this._generateFrostSeeds();

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#E0F7FA',
      'good': '#B2EBF2',
      'meh': '#80DEEA',
      'none': 'rgba(255, 255, 255, 0.1)'
    };
    return palette[this.monthData()[idx]] || palette['none'];
  }

  private _generateFrostSeeds() {
    const count = this.monthData();
    const seeds: any[] = [];
    const maxAttempts = 200;
    const paddingBase = 20;

    for (let i = 0; i < count; i++) {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        const newSeed = {
          x: Math.random() * 300,
          y: 20 + Math.random() * 150,
          rotation: Math.random() * 360,
          scale: 0.7 + Math.random() * 0.1
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

  }
}
