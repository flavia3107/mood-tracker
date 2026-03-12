import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
interface Point { x: number; y: number; }
@Component({
  selector: 'app-january',
  imports: [],
  templateUrl: './january.html',
  styleUrl: './january.scss',
})
export class January {
  private _utilService = inject(UtilsService);
  public monthData = this._utilService.monthDays;

  frostSeeds = Array.from({ length: this.monthData() }, (_, i) => ({
    x: 20 + Math.random() * 160,
    y: 20 + Math.random() * 160,
    rotation: Math.random() * 360,
    scale: 0.4 + Math.random() * 0.5
  }));

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#E0F7FA',
      'good': '#B2EBF2',
      'meh': '#80DEEA',
      'none': 'rgba(255, 255, 255, 0.1)'
    };
    return palette[this.monthData()[idx]] || palette['none'];
  }
}
