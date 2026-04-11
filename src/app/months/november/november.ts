import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';
@Component({
  selector: 'app-november',
  imports: [MoodPicker],
  templateUrl: './november.html',
  styleUrl: './november.scss',
})
export class November {
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate();
  days = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    color: this._utilService.getMoodColorForDate(new Date(this._date.getFullYear(), 10, i + 1))
  }));

  totalPathLength = 920;
  gap = 2;
  segmentLength = (this.totalPathLength / 30) - this.gap;
  private _selectedMood: string = '';
  moods: string[] = Array(30).fill('#');

  updateDay(day: any) {
    if (this._selectedMood && day['color'] === '#fff')
      day['color'] = this._selectedMood;
  }

  updateMood(color: string) {
    this._selectedMood = color;
  }
}
