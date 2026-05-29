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

  // Total length of our half-circle arc path is exactly PI * Radius (3.14159 * 40)
  readonly strokeDashArray = 125.6;
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

    // Pointer angle moves seamlessly from 0deg (left) to 180deg (right)
    this.pointerRotation = percentage * this.maxRotation;

    // Inverse calculation: 125.6 is empty, 0 is full.
    this.strokeDashOffset = this.strokeDashArray - (percentage * this.strokeDashArray);
  }
}
