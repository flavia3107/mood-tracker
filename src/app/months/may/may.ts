import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

interface Flower {
  day: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
}

@Component({
  selector: 'app-may',
  imports: [MoodPicker],
  templateUrl: './may.html',
  styleUrl: './may.scss',
})
export class May implements OnInit {
  private _utilsService = inject(UtilsService);
  private _monthData = this._utilsService.monthDays;
  numDays = 31;
  public _selectedColor = '';
  public flowers: Flower[] = [];
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate();

  ngOnInit() {
    this._generateFlowers();
  }

  private _generateFlowers() {
    const tempTrackers: Flower[] = [];
    const remToUnit = 16;
    const width = 45 * remToUnit;
    const height = 23 * remToUnit;
    const minDistance = 55;

    for (let i = 0; i < this.numDays; i++) {
      let x = 0, y = 0, collision = true, attempts = 0;

      while (collision && attempts < 150) {
        x = 40 + Math.random() * (width - 80);
        y = 40 + Math.random() * (height - 80);

        collision = tempTrackers.some(other => {
          const dx = x - other.x;
          const dy = y - other.y;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        attempts++;
      }

      tempTrackers.push({
        day: i + 1,
        x,
        y,
        rotation: Math.random() * 360,
        scale: 1.8 + Math.random() * 0.3,
        color: this._utilService.getMoodColorForDate(new Date(this._date.getFullYear(), 4, i + 1))
      });
    }
    this.flowers = tempTrackers;
  }

  onFlowerClick(flower: Flower) {
    if (this._selectedColor && flower['color'] === '#fff')
      flower.color = this._selectedColor;
  }

  public updateMood(color: string) {
    this._selectedColor = color;
  }
}
