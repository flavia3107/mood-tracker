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
  strokeDashoffset = computed(() => this._calculateStroke());

  private _getAverage(): number {
    const monthConfig = this._utilsService.monthConfig().filter(month => month.color !== '#fff');
    const rawAvg = monthConfig.reduce((sum, current) => sum + current.value, 0) / monthConfig.length;
    const mappedAvg = (rawAvg - 1) * 2;
    return +mappedAvg.toFixed(2);
  }

  private _calculateStroke() {
    const boundedValue = Math.min(Math.max(this.monthlyAvg(), 0), 10) ?? 0;
    return this.circumference - (boundedValue / 10) * this.circumference;
  }
}

// to do: handle edge cases, future empty values || week with no value
