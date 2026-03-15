import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-august',
  imports: [],
  templateUrl: './august.html',
  styleUrl: './august.scss',
})
export class August {
  private _utilService = inject(UtilsService);
  public monthData = this._utilService.monthDays;

  getRotation(i: number): string {
    return `rotate(${(i * 360) / 31}, 125, 125)`;
  }

  getMoodColor(i: number): string {
    const mood = this.monthData()[i];
    const palette: Record<string, string> = {
      'great': '#FFD700',
      'good': '#F4D03F',
      'meh': '#D4AC0D',
      'bad': '#997950',
      'none': '#fff'
    };
    return palette[mood] || palette['none'];
  }

  getTextRotation(index: number): string {
    const angle = (index * (360 / this.monthData()));
    // Center of rotation is 125 (horizontal center) and 48 (near the tip)
    return `rotate(${-angle}, 125, 48)`;
  }
}
