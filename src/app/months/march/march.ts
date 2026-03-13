import { Component, computed, signal } from '@angular/core';

interface CloudDay {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  moodColor: string;
}

@Component({
  selector: 'app-march',
  imports: [],
  templateUrl: './march.html',
  styleUrl: './march.scss',
})
export class March {
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#f8fafc' })));

  // Computed signal to generate the organic cloud nursery
  marchClouds = computed<CloudDay[]>(() => {
    return this.days().map((day, i) => {
      // 1. Placement: Randomly scatter across the ENTIRE space (0-600)
      const x = 50 + (Math.random() * 500);
      const y = 80 + (Math.random() * 650);

      // 2. Variable Scale and Depth
      return {
        ...day,
        x,
        y,
        // Scale variation creates depth (0.7 is far away, 1.4 is closer)
        scale: 0.7 + (Math.random() * 0.7),
        rotation: (Math.random() * 20) - 10, // Subtle natural drift
        moodColor: day.color
      };
    });
  });
}
