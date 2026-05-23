import { LowerCasePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import { computed, viewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, inject } from '@angular/core';
import { JUNE_CONFIG, MONTH_DAYS_CONFIG } from '../../shared/constants/config';
import { MONTHLY_BACKGROUNDS, Mood, MOOD_MESSAGES } from '../../shared/constants/constants';
import { UtilsService } from '../../shared/services/utils';
import { MoodPicker } from '../mood-picker/mood-picker';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-mood-view',
  imports: [MoodPicker, NgTemplateOutlet, LowerCasePipe, NgClass, MatTooltipModule],
  templateUrl: './mood-view.html',
  styleUrl: './mood-view.scss',
})
export class MoodView {
  readonly moods = MOOD_MESSAGES;
  readonly june_config = JUNE_CONFIG;
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate;
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
  public activeMood!: Mood;
  public currentMonth = this._utilService.activeMonth;
  public moodLogic = this._updateSvgConfig();
  public activeTemplate = computed(() => this._templateMap());
  public currentBackground = computed(() => this._currentMonthPath());

  private getMoodColorForDate(mood: { [key: string]: string }) {
    this._selectedColor = mood['color'];
    this.activeMood = mood['label'] as Mood;
  }

  private onDayClick(day: any) {
    const selectedDate = new Date(this._date().getFullYear(), this._date().getMonth(), day.day);
    const d2 = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    if (this._selectedColor && selectedDate.getTime() === d2.getTime())
      day['color'] = this._selectedColor;
  }

  private _getDaysConfig() {
    return MONTH_DAYS_CONFIG[this.currentMonth()]
      .map((day: any, index: number) => {
        const dt = new Date(this._date().getFullYear(), this._date().getMonth(), index + 1);
        const d2 = new Date();
        dt.setHours(0, 0, 0, 0);
        d2.setHours(0, 0, 0, 0);
        const { color, label } = this._utilService.getMoodColorForDate(dt)
        return {
          ...day,
          isActiveDay: dt.getTime() === d2.getTime(),
          color,
          tooltip: this.moods[label as Mood]
        };
      });
  }

  private _updateSvgConfig() {
    return {
      getColor: (mood: { [key: string]: string }) => this.getMoodColorForDate(mood),
      updateMood: (day: any) => this.onDayClick(day),
      getLeafTransform: (indx: number) => this._getLeafTransform(indx),
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

  private _templateMap() {
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
  }

  private _currentMonthPath() {
    const images: Record<string, string> = MONTHLY_BACKGROUNDS;
    const fullPath = images[this.currentMonth()];
    return `url("${fullPath}")`;
  }
}
