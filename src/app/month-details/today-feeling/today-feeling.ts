import { DatePipe } from '@angular/common';
import { Component, computed, DestroyRef, effect, inject, signal } from '@angular/core';
import { MONTHLY_MOOD_CONFIG } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-today-feeling',
  imports: [DatePipe],
  templateUrl: './today-feeling.html',
  styleUrl: './today-feeling.scss',
})
export class TodayFeeling {
  private _utilService = inject(UtilsService);
  private _destroyRef = inject(DestroyRef);
  readonly todayMood = this._utilService.mood;
  readonly strokeDashArray = 125.6;
  public colors = computed(() => this._getColors());

  time = signal(new Date());
  maxRotation: number = 180;
  pointerRotation: number = 0;
  strokeDashOffset: number = 125.6;

  constructor() {
    const intervalId = setInterval(() => this.time.set(new Date()), 1000);
    this._destroyRef.onDestroy(() => clearInterval(intervalId));
    effect(() => this.calculateGauge());

  }

  private _getColors() {
    const colors = MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()].map((mood: { label: string, color: string }) => mood.color);
    return colors;
  }

  private calculateGauge(): void {
    const sanitizedValue = Math.max(0, Math.min(6, this.todayMood().value));
    const percentage = sanitizedValue / 6;
    console.log('HERE', percentage)
    this.pointerRotation = percentage * this.maxRotation;
    const semiCircleCircumference = this.strokeDashArray / 2;
    this.strokeDashOffset = this.strokeDashArray - (percentage * semiCircleCircumference);
  }
}
