import { Component } from '@angular/core';

@Component({
  selector: 'app-average-feeling',
  imports: [],
  templateUrl: './average-feeling.html',
  styleUrl: './average-feeling.scss',
})
export class AverageFeeling {
  value: number = 7.42;

  radius = 85;
  circumference = 2 * Math.PI * this.radius; // Total length of the circle border (~534)
  strokeDashoffset = this.circumference;

  ngOnChanges(): void {
    // Keep value between 0 and 100
    const boundedValue = Math.min(Math.max(this.value, 0), 10);
    // Calculate how much of the track to color
    this.strokeDashoffset = this.circumference - (boundedValue / 10) * this.circumference;
  }
}
