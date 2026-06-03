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


  private _getAverage() {
    const monthConfig = this._utilsService.monthConfig().filter(month => month.color !== '#fff');
    const avg = monthConfig.reduce((sum, current) => sum + current.value, 0);
    const boundedValue = Math.min(Math.max(avg, 0), 10);
    this.strokeDashoffset = this.circumference - (boundedValue / 10) * this.circumference;
    return avg / monthConfig.length;
  }
}
