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

  maxRotation: number = 180;
  pointerRotation: number = 0;

  readonly strokeDashArray = 251.2;
  // Initialize to 125.6 so it defaults to an empty arc, not a full circle
  strokeDashOffset: number = 125.6;

  ngOnInit(): void {
    this.calculateGauge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value'] && !changes['value'].firstChange) {
      this.calculateGauge();
    }
  }

  private calculateGauge(): void {
    const sanitizedValue = Math.max(0, Math.min(10, this.value));
    const percentage = sanitizedValue / 10;

    // Calculate pointer angle (0 to 180 deg)
    this.pointerRotation = percentage * this.maxRotation;

    // Calculate stroke offset
    // Half of the circle's full circumference is 125.6. 
    // We subtract the percentage filled from the empty baseline state (251.2 - 125.6)
    const semiCircleCircumference = this.strokeDashArray / 2;
    this.strokeDashOffset = this.strokeDashArray - (percentage * semiCircleCircumference);
  }
}
