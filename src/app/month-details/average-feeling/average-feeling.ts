import { Component, computed, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-average-feeling',
  imports: [],
  templateUrl: './average-feeling.html',
  styleUrl: './average-feeling.scss',
})
export class AverageFeeling {
  private _utilsService = inject(UtilsService);
  days = this._utilsService.numberOfDays;
  monthlyAvg = computed(() => this._getAverage())
  radius = 50;
  circumference = 2 * Math.PI * this.radius;
  strokeDashoffset = this.circumference;

  private _getAverage(): number {
    const monthConfig = this._utilsService.monthConfig().filter(month => month.color !== '#fff');

    if (monthConfig.length === 0) {
      this.strokeDashoffset = this.circumference;
      return 0;
    }
    const totalSum = monthConfig.reduce((sum, current) => sum + (Number(current?.value) || 0), 0);
    const trueAverage = totalSum / monthConfig.length;
    const clampedAverage = Math.min(Math.max(trueAverage, 1), 6);
    const scaledAverage = ((clampedAverage - 1) / (6 - 1)) * (10 - 1) + 1;
    this.strokeDashoffset = this.circumference - (scaledAverage / 10) * this.circumference;
    return scaledAverage;
  }
}
