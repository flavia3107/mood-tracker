import { LowerCasePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { computed, viewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, inject } from '@angular/core';
import { JUNE_CONFIG, MONTH_DAYS_CONFIG } from '../../shared/constants/config';
import { UtilsService } from '../../shared/services/utils';
import { MoodPicker } from '../mood-picker/mood-picker';

@Component({
  selector: 'app-mood-view',
  imports: [MoodPicker, NgTemplateOutlet, LowerCasePipe, NgClass],
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
  readonly june_config = JUNE_CONFIG;

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

  private onDayClick(day: any, indx?: number) {
    if (indx != null) this._updateDay(indx);
    else {
      if (this._selectedColor && day['color'] === '#fff')
        day['color'] = this._selectedColor;
    }
  }

  private _getDaysConfig() {
    return MONTH_DAYS_CONFIG[this.currentMonth()]?.map((day: any, index: number) => ({ ...day, color: this._utilService.getMoodColorForDate(new Date(this._date().getFullYear(), this._date().getMonth(), index + 1)) }));
  }

  private _updateSvgConfig() {
    return {
      getColor: (color: string) => this.getMoodColorForDate(color),
      updateMood: (day: any, indx?: number) => this.onDayClick(day, indx),
      getLeafTransform: (indx: number) => this._getLeafTransform(indx),
      getLeafTransformMarch: (indx: number) => this._getLeafTransformMarch(indx),
      getLabelPos: (indx: any) => this._getLabelPos(indx),
      days: this._getDaysConfig(),
      november: {
        totalPathLength: 920,
        segmentLength: (920 / 30) - 2
      }
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

  private _getLeafTransformMarch(leafIndex: number): string {
    const rotations = [0, 90, 180, 270];
    const gap = 3;

    const offsets = [
      { x: 150, y: 80 - gap },
      { x: 220 + gap, y: 150 },
      { x: 150, y: 220 + gap },
      { x: 80 - gap, y: 150 }
    ];

    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) scale(1.3) rotate(${rotations[leafIndex]}, 50, 50)`;
  }

  private _updateDay(index: number) {
    if (this._selectedColor)
      this.moodLogic.days.update((current: any) => {
        const updated = [...current];
        updated[index].color = this._selectedColor;
        return updated;
      });
  }

  private _getLabelPos(shardIndex: number) {
    const centers = [
      { x: 40, y: 75 }, { x: 60, y: 75 },
      { x: 20, y: 45 }, { x: 35, y: 45 },
      { x: 50, y: 20 }, { x: 50, y: 40 },
      { x: 65, y: 45 }, { x: 80, y: 45 }
    ];
    return centers[shardIndex];
  }
}
