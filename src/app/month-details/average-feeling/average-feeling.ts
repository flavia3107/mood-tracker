import { Component, computed, inject } from '@angular/core';
import { MOOD_RANGES } from '../../../shared/constants/constants';
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
  strokeDashoffset = computed(() => this._calculateStroke());

  private _getAverage(): { avg: number, message: string } {
    const monthConfig = this._utilsService.monthConfig().filter((month: { color: string; }) => month.color !== '#fff');
    const rawAvg = monthConfig.reduce((sum: any, current: { value: any; }) => sum + current.value, 0) / monthConfig.length;
    const mappedAvg = (rawAvg - 1) * 2;
    const avg = isNaN(mappedAvg) ? 0 : +mappedAvg.toFixed(2);
    const message: string = MOOD_RANGES.find((range: { min: number; max: number; }) => avg >= range.min && avg <= range.max)?.message ?? '';

    return { avg, message };
  }

  private _calculateStroke() {
    const boundedValue = Math.min(Math.max(this.monthlyAvg().avg, 0), 10) ?? 0;
    return this.circumference - (boundedValue / 10) * this.circumference;
  }
}
