import { Component } from '@angular/core';

@Component({
  selector: 'app-average-feeling',
  imports: [],
  templateUrl: './average-feeling.html',
  styleUrl: './average-feeling.scss',
})
export class AverageFeeling {
  value: number = 7.42;
  radius = 50;
  circumference = 2 * Math.PI * this.radius;
  strokeDashoffset = this.circumference;

  constructor() {
    this._getAverage();
  }

  private _getAverage() {
    const boundedValue = Math.min(Math.max(this.value, 0), 10);
    this.strokeDashoffset = this.circumference - (boundedValue / 10) * this.circumference;
  }
}
