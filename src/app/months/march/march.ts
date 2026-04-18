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
  public config =
    [
      { "day": 1, "color": "#fff", "path": "M150,177 L98,131.5 L150,118.5 Z", "leaf": 0, "x": 137, "y": 144 },
      { "day": 2, "color": "#fff", "path": "M150,177 L150,118.5 L202,131.5 Z", "leaf": 0, "x": 163, "y": 144 },
      { "day": 3, "color": "#fff", "path": "M85,138 L85,60 L202,66.5 Z", "leaf": 0, "x": 111, "y": 105 },
      { "day": 4, "color": "#fff", "path": "M137,73 L150,118.5 L98,131.5 Z", "leaf": 0, "x": 130, "y": 105 },
      { "day": 5, "color": "#fff", "path": "M137,73 L150,53.5 L163,73 Z", "leaf": 0, "x": 150, "y": 73 },
      { "day": 6, "color": "#fff", "path": "M163,73 L150,118.5 L137,73 Z", "leaf": 0, "x": 150, "y": 99 },
      { "day": 7, "color": "#fff", "path": "M202,131.5 L150,118.5 L163,73 Z", "leaf": 0, "x": 169, "y": 105 },
      { "day": 8, "color": "#fff", "path": "M241,47 L202,131.5 L150,60 Z", "leaf": 0, "x": 189, "y": 105 },
      { "day": 9, "color": "#fff", "path": "M223,150 L268.5,190 L281.5,150 Z", "leaf": 1, "x": 255, "y": 163 },
      { "day": 10, "color": "#fff", "path": "M223,150 L281.5,150 L268.5,110 Z", "leaf": 1, "x": 255, "y": 137 },
      { "day": 11, "color": "#fff", "path": "M262,215 L340,215 L333.5,98 Z", "leaf": 1, "x": 296, "y": 189 },
      { "day": 12, "color": "#fff", "path": "M327,163 L281.5,150 L268.5,190 Z", "leaf": 1, "x": 296, "y": 170 },
      { "day": 13, "color": "#fff", "path": "M327,163 L346.5,150 L327,137 Z", "leaf": 1, "x": 328, "y": 150 },
      { "day": 14, "color": "#fff", "path": "M281.5,150 L327,163 L327,137 Z", "leaf": 1, "x": 301, "y": 150 },
      { "day": 15, "color": "#fff", "path": "M268.5,110 L281.5,150 L327,137 Z", "leaf": 1, "x": 296, "y": 131 },
      { "day": 16, "color": "#fff", "path": "M353,59 L268.5,110 L340,150 Z", "leaf": 1, "x": 296, "y": 111 },
      { "day": 17, "color": "#fff", "path": "M150,223 L202,268.5 L150,281.5 Z", "leaf": 2, "x": 163, "y": 255 },
      { "day": 18, "color": "#fff", "path": "M150,223 L150,281.5 L98,268.5 Z", "leaf": 2, "x": 137, "y": 255 },
      { "day": 19, "color": "#fff", "path": "M215,262 L215,340 L98,333.5 Z", "leaf": 2, "x": 189, "y": 296 },
      { "day": 20, "color": "#fff", "path": "M163,327 L150,281.5 L202,268.5 Z", "leaf": 2, "x": 170, "y": 296 },
      { "day": 21, "color": "#fff", "path": "M163,327 L150,346.5 L137,327 Z", "leaf": 2, "x": 150, "y": 328 },
      { "day": 22, "color": "#fff", "path": "M137,327 L150,281.5 L163,327 Z", "leaf": 2, "x": 150, "y": 301 },
      { "day": 23, "color": "#fff", "path": "M98,268.5 L150,281.5 L137,327 Z", "leaf": 2, "x": 131, "y": 296 },
      { "day": 24, "color": "#fff", "path": "M59,353 L98,268.5 L150,340 Z", "leaf": 2, "x": 111, "y": 296 },
      { "day": 25, "color": "#fff", "path": "M77,150 L31.5,110 L18.5,150 Z", "leaf": 3, "x": 45, "y": 137 },
      { "day": 26, "color": "#fff", "path": "M77,150 L18.5,150 L31.5,190 Z", "leaf": 3, "x": 45, "y": 163 },
      { "day": 27, "color": "#fff", "path": "M38,85 L-40,85 L-33.5,202 Z", "leaf": 3, "x": 4, "y": 111 },
      { "day": 28, "color": "#fff", "path": "M-27,137 L18.5,150 L31.5,110 Z", "leaf": 3, "x": 4, "y": 130 },
      { "day": 29, "color": "#fff", "path": "M-27,137 L-46.5,150 L-27,163 Z", "leaf": 3, "x": -28, "y": 150 },
      { "day": 30, "color": "#fff", "path": "M18.5,150 L-27,137 L-27,163 Z", "leaf": 3, "x": -1, "y": 150 },
      { "day": 31, "color": "#fff", "path": "M31.5,190 C10,210 0,195 -7,163 L18.5,150 L31.5,190 Z", "leaf": 3, "x": 4, "y": 170 }
    ]

  updateDay(index: any) {
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