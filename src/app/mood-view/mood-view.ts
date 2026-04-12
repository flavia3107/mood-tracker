import { LowerCasePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { computed, effect, viewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, inject } from '@angular/core';
import { MONTH_DAYS_CONFIG } from '../../shared/constants/config';
import { UtilsService } from '../../shared/services/utils';
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
  imports: [January, March, MoodPicker, May, June, July, September, October, November, NgTemplateOutlet, LowerCasePipe, NgClass],
  templateUrl: './mood-view.html',
  styleUrl: './mood-view.scss',
})
export class MoodView {
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate;
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
  public moodLogic = this._updateSvgConfig();

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

    this.moodLogic = this._updateSvgConfig();
    return map[this.currentMonth()];
  });


  private getMoodColorForDate(color: string) {
    this._selectedColor = color;
  }

  private onDayClick(day: any) {
    if (this._selectedColor && day['color'] === '#fff')
      day['color'] = this._selectedColor;
  }

  private _getDaysConfig() {
    return MONTH_DAYS_CONFIG[this.currentMonth()]?.map((day: any, index: number) => ({ ...day, color: this._utilService.getMoodColorForDate(new Date(this._date().getFullYear(), this._date().getMonth(), index + 1)) }));
  }

  private _updateSvgConfig() {
    return {
      getColor: (color: string) => this.getMoodColorForDate(color),
      updateMood: (day: any) => this.onDayClick(day),
      getLeafTransform: (indx: number) => this._getLeafTransform(indx),
      days: this._getDaysConfig()
    }
  }

  private _getLeafTransform(leafIndex: number): string {
    const rotations = [-70, 140];
    const offsets = [
      { x: 140, y: 60 },
      { x: 240, y: 120 },
    ];

    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) scale(1.3) rotate(${rotations[leafIndex]}, 40, 60)`;
  }
}
