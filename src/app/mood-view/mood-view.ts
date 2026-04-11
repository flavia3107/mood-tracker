import { NgTemplateOutlet } from '@angular/common';
import { computed, viewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, inject } from '@angular/core';
import { UtilsService } from '../../shared/services/utils';
import { April } from '../months/april/april';
import { August } from '../months/august/august';
import { December } from '../months/december/december';
import { February } from '../months/february/february';
import { January } from '../months/january/january';
import { July } from '../months/july/july';
import { June } from '../months/june/june';
import { March } from '../months/march/march';
import { May } from '../months/may/may';
import { November } from '../months/november/november';
import { October } from '../months/october/october';
import { September } from '../months/september/september';
import { MoodPicker } from '../mood-picker/mood-picker';

@Component({
  selector: 'app-mood-view',
  imports: [January, February, March, MoodPicker, May, June, July, August, September, October, November, December, NgTemplateOutlet],
  templateUrl: './mood-view.html',
  styleUrl: './mood-view.scss',
})
export class MoodView {
  private _utilService = inject(UtilsService);
  public currentMonth = this._utilService.activeMonth;
  private _jan = viewChild<TemplateRef<any>>('january');
  private _feb = viewChild<TemplateRef<any>>('february');
  private _mar = viewChild<TemplateRef<any>>('march');
  private _apr = viewChild<TemplateRef<any>>('april');
  private _may = viewChild<TemplateRef<any>>('may');
  private _jun = viewChild<TemplateRef<any>>('june');
  private _jul = viewChild<TemplateRef<any>>('july');
  private _aug = viewChild<TemplateRef<any>>('august');
  private _sep = viewChild<TemplateRef<any>>('september');
  private _oct = viewChild<TemplateRef<any>>('october');
  private _nov = viewChild<TemplateRef<any>>('november');
  private _dec = viewChild<TemplateRef<any>>('december');
  private _selectedColor = '';

  moodLogic = {
    getColor: (color: string) => this.getMoodColorForDate(color),
    updateMood: (day: any) => this.onDayClick(day)
  };

  activeTemplate = computed(() => {
    const map: Record<string, TemplateRef<any> | undefined> = {
      'January': this._jan(),
      'February': this._feb(),
      'March': this._mar(),
      'April': this._apr(),
      'May': this._may(),
      'June': this._jun(),
      'July': this._jul(),
      'August': this._aug(),
      'September': this._sep(),
      'October': this._oct(),
      'November': this._nov(),
      'December': this._dec(),
    };

    return map[this.currentMonth()];
  });


  private getMoodColorForDate(color: string) {
    this._selectedColor = color;
  }

  private onDayClick(day: any) {
    if (this._selectedColor && day['color'] === '#fff')
      day['color'] = this._selectedColor;
  }

  private _selectedMood: string = '';
  private _utilsService = inject(UtilsService);
  private _currentDate = new Date().getFullYear();
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
      color: this._utilsService.getMoodColorForDate(new Date(this._currentDate, 3, day))
    };
  });
}
