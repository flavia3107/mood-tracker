import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-april',
  imports: [MoodPicker],
  templateUrl: './april.html',
  styleUrl: './april.scss',
})
export class April {
  private _selectedMood: string = '';
  private _utilsService = inject(UtilsService);
  private _currentDate = new Date();
  totalDays = 30;
  curveIntensity = 145;
  topCurveY = 90;

  umbrellaSlices = Array.from({ length: this.totalDays }, (_, i) => {
    const day = i + 1;
    const totalPathLength = 350;
    const getPointOnPath = (index: number) => {
      const distance = (index / this.totalDays) * totalPathLength;
      let x, y;

      if (distance <= 100) {
        // Left Section (Equal steps along the 100-unit curve)
        const localT = distance / 100;
        x = 25 + (100 * localT);
        y = 280 + (35 * localT);
      } else if (distance <= 250) {
        // Middle Section (Equal steps along the 150-unit flat)
        const localT = (distance - 100) / 150;
        x = 125 + (150 * localT);
        y = 315;
      } else {
        // Right Section (Equal steps along the 100-unit curve)
        const localT = (distance - 250) / 100;
        x = 275 + (100 * localT);
        y = 310 - (35 * localT);
      }
      return { x, y };
    };

    const p1 = getPointOnPath(i);
    const p2 = getPointOnPath(i + 1);

    // 2. Top Ridge - Distributed equally to match bottom
    const tx1 = 180 + (i * (40 / this.totalDays));
    const tx2 = 180 + ((i + 1) * (40 / this.totalDays));
    const topY = 70;

    // 3. High-Curve Control Point Logic
    const getControlX = (topX: number, bottomX: number) => {
      const midX = (topX + bottomX) / 2;
      // Pushes the curve outward based on center distance
      const offset = ((midX - 200) / 200) * this.curveIntensity;
      return midX + offset;
    };

    const cx1 = getControlX(tx1, p1.x);
    const cx2 = getControlX(tx2, p2.x);

    return {
      day,
      path: `M${tx1},${topY} 
           Q${cx1},${this.topCurveY} ${p1.x.toFixed(1)},${p1.y.toFixed(1)} 
           L${p2.x.toFixed(1)},${p2.y.toFixed(1)} 
           Q${cx2},${this.topCurveY} ${tx2},${topY} Z`,
      label: {
        x: ((p1.x + p2.x) / 2).toFixed(1),
        y: (((p1.y + p2.y) / 2) - 20).toFixed(1),
      },
      color: this._utilsService.getMoodColorForDate(new Date(this._currentDate.getFullYear(), this._currentDate.getMonth(), day))
    };
  });

  updateMood(color: string) {
    this._selectedMood = color;
  }

  updateDay(day: any) {
    if (this._selectedMood && day['color'] === '#fff')
      day['color'] = this._selectedMood;
  }
}
