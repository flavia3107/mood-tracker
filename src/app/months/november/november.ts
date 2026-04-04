import { Component } from '@angular/core';
import { MoodPicker } from '../../mood-picker/mood-picker';
@Component({
  selector: 'app-november',
  imports: [MoodPicker],
  templateUrl: './november.html',
  styleUrl: './november.scss',
})
export class November {
  days = Array.from({ length: 30 }, (_, i) => ({
    date: i + 1,
    color: '#fff'
  }));

  totalPathLength = 890;
  gap = 2;
  segmentLength = (this.totalPathLength / 30) - this.gap;
  private _selectedMood: string = '';
  moods: string[] = Array(30).fill('#');

  updateDay(day: any) {
    if (this._selectedMood)
      day['color'] = this._selectedMood;
  }

  updateMood(color: string) {
    this._selectedMood = color;
  }
}
