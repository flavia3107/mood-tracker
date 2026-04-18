import { Component, inject, signal } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-march',
  imports: [MoodPicker],
  standalone: true,
  templateUrl: './march.html',
  styleUrls: ['./march.scss']
})
export class March {
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate;
  days = Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#FFFFFF' }));
  private _selectedMood: string = '';

  readonly shardPaths = [
    "M50,100 L10,65 L50,55 Z", "M50,100 L50,55 L90,65 Z",
    "M0,70 L0,10 L90,15 Z", "M40,20 L50,55 L10,65 Z",
    "M40,20 L50,5 L60,20 Z", "M60,20 L50,55 L40,20 Z",
    "M90,65 L50,55 L60,20 Z", "M120,0 L90,65 L50,10 Z"
  ];
  public config = [
    { "day": 1, "color": "#fff", "path": "M50,100 L10,65 L50,55 Z", "leaf": 0, "x": 40, "y": 75 },
    { "day": 2, "color": "#fff", "path": "M50,100 L50,55 L90,65 Z", "leaf": 0, "x": 60, "y": 75 },
    { "day": 3, "color": "#fff", "path": "M0,70 L0,10 L90,15 Z", "leaf": 0, "x": 20, "y": 45 },
    { "day": 4, "color": "#fff", "path": "M40,20 L50,55 L10,65 Z", "leaf": 0, "x": 35, "y": 45 },
    { "day": 5, "color": "#fff", "path": "M40,20 L50,5 L60,20 Z", "leaf": 0, "x": 50, "y": 20 },
    { "day": 6, "color": "#fff", "path": "M60,20 L50,55 L40,20 Z", "leaf": 0, "x": 50, "y": 40 },
    { "day": 7, "color": "#fff", "path": "M90,65 L50,55 L60,20 Z", "leaf": 0, "x": 65, "y": 45 },
    { "day": 8, "color": "#fff", "path": "M120,0 L90,65 L50,10 Z", "leaf": 0, "x": 80, "y": 45 },
    { "day": 9, "color": "#fff", "path": "M50,100 L10,65 L50,55 Z", "leaf": 1, "x": 40, "y": 75 },
    { "day": 10, "color": "#fff", "path": "M50,100 L50,55 L90,65 Z", "leaf": 1, "x": 60, "y": 75 },
    { "day": 11, "color": "#fff", "path": "M0,70 L0,10 L90,15 Z", "leaf": 1, "x": 20, "y": 45 },
    { "day": 12, "color": "#fff", "path": "M40,20 L50,55 L10,65 Z", "leaf": 1, "x": 35, "y": 45 },
    { "day": 13, "color": "#fff", "path": "M40,20 L50,5 L60,20 Z", "leaf": 1, "x": 50, "y": 20 },
    { "day": 14, "color": "#fff", "path": "M60,20 L50,55 L40,20 Z", "leaf": 1, "x": 50, "y": 40 },
    { "day": 15, "color": "#fff", "path": "M90,65 L50,55 L60,20 Z", "leaf": 1, "x": 65, "y": 45 },
    { "day": 16, "color": "#fff", "path": "M120,0 L90,65 L50,10 Z", "leaf": 1, "x": 80, "y": 45 },
    { "day": 17, "color": "#fff", "path": "M50,100 L10,65 L50,55 Z", "leaf": 2, "x": 40, "y": 75 },
    { "day": 18, "color": "#fff", "path": "M50,100 L50,55 L90,65 Z", "leaf": 2, "x": 60, "y": 75 },
    { "day": 19, "color": "#fff", "path": "M0,70 L0,10 L90,15 Z", "leaf": 2, "x": 20, "y": 45 },
    { "day": 20, "color": "#fff", "path": "M40,20 L50,55 L10,65 Z", "leaf": 2, "x": 35, "y": 45 },
    { "day": 21, "color": "#fff", "path": "M40,20 L50,5 L60,20 Z", "leaf": 2, "x": 50, "y": 20 },
    { "day": 22, "color": "#fff", "path": "M60,20 L50,55 L40,20 Z", "leaf": 2, "x": 50, "y": 40 },
    { "day": 23, "color": "#fff", "path": "M90,65 L50,55 L60,20 Z", "leaf": 2, "x": 65, "y": 45 },
    { "day": 24, "color": "#fff", "path": "M120,0 L90,65 L50,10 Z", "leaf": 2, "x": 80, "y": 45 },
    { "day": 25, "color": "#fff", "path": "M50,100 L10,65 L50,55 Z", "leaf": 3, "x": 40, "y": 75 },
    { "day": 26, "color": "#fff", "path": "M50,100 L50,55 L90,65 Z", "leaf": 3, "x": 60, "y": 75 },
    { "day": 27, "color": "#fff", "path": "M0,70 L0,10 L90,15 Z", "leaf": 3, "x": 20, "y": 45 },
    { "day": 28, "color": "#fff", "path": "M40,20 L50,55 L10,65 Z", "leaf": 3, "x": 35, "y": 45 },
    { "day": 29, "color": "#fff", "path": "M40,20 L50,5 L60,20 Z", "leaf": 3, "x": 50, "y": 20 },
    { "day": 30, "color": "#fff", "path": "M60,20 L50,55 L40,20 Z", "leaf": 3, "x": 50, "y": 40 },
    { "day": 31, "color": "#fff", "path": "M60,15 C85,0 100,10 105,35 L90,65 L50,55 Z", "leaf": 3, "x": 65, "y": 45 }
  ];

  updateDay(index: any) {
    console.log('HERE', this.config)
    const selectedDate = new Date(this._date().getFullYear(), this._date().getMonth(), index + 1)
    const d2 = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    if (this._selectedMood && selectedDate.getTime() === d2.getTime())
      this.days[index].color = this._selectedMood;
  }


  updateMood(color: string) {
    this._selectedMood = color;
  }

}