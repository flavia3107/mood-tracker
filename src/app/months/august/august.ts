import { Component, computed, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-august',
  imports: [MoodPicker],
  templateUrl: './august.html',
  styleUrl: './august.scss',
})
export class August {
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate();
  public monthData = this._utilService.monthDays;
  private _selectedMood: string = '';

  days = computed(() => {
    const totalDays = this.monthData();

    return Array.from({ length: totalDays }, (_, i) => {
      const angle = (i * 360) / totalDays;
      return {
        label: i + 1,
        groupTransform: `rotate(${angle}, 125, 125)`,
        textTransform: `rotate(${-angle}, 125, 48)`,
        fill: this._utilService.getMoodColorForDate(new Date(this._date.getFullYear(), 7, i + 1)),
        stroke: '#3E2723'
      };
    });
  });

  updateMood(color: string) {
    this._selectedMood = color;
  }

  updateDayMood(day: any) {
    if (this._selectedMood && day['fill'] === '#fff')
      day.fill = this._selectedMood;
  }
}
