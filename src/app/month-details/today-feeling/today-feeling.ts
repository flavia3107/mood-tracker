import { Component, inject, SimpleChanges } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-today-feeling',
  imports: [],
  templateUrl: './today-feeling.html',
  styleUrl: './today-feeling.scss',
})
export class TodayFeeling {
  private _utilService = inject(UtilsService);
  readonly todayMood = this._utilService.mood;
  readonly strokeDashArray = 125.6;

  maxRotation: number = 180;
  pointerRotation: number = 0;
  strokeDashOffset: number = 125.6;

  ngOnInit(): void {
    this.calculateGauge();
  }

  private calculateGauge(): void {
    const sanitizedValue = Math.max(0, Math.min(6, this.todayMood().value));
    const percentage = sanitizedValue / 6;

    // Pointer angle moves seamlessly from 0deg (left) to 180deg (right)
    this.pointerRotation = percentage * this.maxRotation;

    // Inverse calculation: 125.6 is empty, 0 is full.
    this.strokeDashOffset = this.strokeDashArray - (percentage * this.strokeDashArray);
  }
}
