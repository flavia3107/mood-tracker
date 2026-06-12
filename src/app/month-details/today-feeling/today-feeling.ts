import { DatePipe } from '@angular/common';
import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
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
  readonly todayMood = this._utilService.todayMood;
  readonly strokeDashArray = 125.6;
  public colors = computed(() => this._getColors());

  time = signal(new Date());
  maxRotation: number = 180;
  pointerRotation: number = 0;
  svgConfig = computed(() => this._calculateSvgConfig());

  constructor() {
    const intervalId = setInterval(() => this.time.set(new Date()), 1000);
    this._destroyRef.onDestroy(() => clearInterval(intervalId));
  }

  private _getColors() {
    const colors = MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()].map((mood: { label: string, color: string }) => mood.color);
    return colors;
  }

  private _calculateSvgConfig(): { strokeDashOffset: number, pointerRotation: number } {
    const mood = this.todayMood();
    const sanitizedValue = Math.max(0, Math.min(6, mood.value));
    const percentage = sanitizedValue / 6;
    const pointerRotation = percentage * this.maxRotation;
    const strokeDashOffset = this.strokeDashArray - (percentage * this.strokeDashArray);

    return { strokeDashOffset, pointerRotation };
  }
}
