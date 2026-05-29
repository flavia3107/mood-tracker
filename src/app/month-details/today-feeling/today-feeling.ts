import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-today-feeling',
  imports: [],
  templateUrl: './today-feeling.html',
  styleUrl: './today-feeling.scss',
})
export class TodayFeeling {
  // Accepts a mood rating from 0 to 10
  value: number = 8;

  maxRotation: number = 180; // Total degrees of a semi-circle
  pointerRotation: number = 0;
  readonly strokeDashArray = 251.2;
  strokeDashOffset: number = 251.2;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.calculateGauge();
    }
  }

  private calculateGauge(): void {
    const sanitizedValue = Math.max(0, Math.min(10, this.value));
    const percentage = sanitizedValue / 10;
    this.pointerRotation = percentage * this.maxRotation;
    const semiCircleCircumference = this.strokeDashArray / 2;
    this.strokeDashOffset = this.strokeDashArray - (percentage * semiCircleCircumference);
  }
}
