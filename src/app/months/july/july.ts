import { inject } from '@angular/core';
import { Component, signal } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';
interface Day {
  id: number;
  moodColor: string;
  x: number;
  y: number;
}
@Component({
  selector: 'app-july',
  imports: [MoodPicker],
  templateUrl: './july.html',
  styleUrl: './july.scss',
})
export class July {
  private _utilService = inject(UtilsService);
  cols = 5;
  private _selectedColor = '';
  private _date = this._utilService.selectedDate();

  hexWidth = 50;
  hexHeight = 58;
  julyDays = Array.from({ length: 31 }, (_, i) => {
    const row = Math.floor(i / this.cols);
    const col = i % this.cols;
    const xSpacing = 52;
    const ySpacing = 45;
    const xOffset = (row % 2 !== 0) ? xSpacing / 2 : 0;

    return {
      id: i + 1,
      x: col * xSpacing + xOffset,
      y: row * ySpacing,
      moodColor: this._utilService.getMoodColorForDate(new Date(this._date.getFullYear(), 6, i + 1))
    };
  });

  updateDayMood(day: Day) {
    if (this._selectedColor && day['moodColor'] === '#fff')
      day.moodColor = this._selectedColor;
  }

  updateMood(color: string) {
    this._selectedColor = color;
  }
}
