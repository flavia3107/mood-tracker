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
      // 1. Pathing: An "S" curve drifting up and right across the sky
      const progress = i / 31;

      // Horizontal drift (some random horizontal variability)
      const x = 50 + (progress * 450) + (Math.random() * 100 - 50);

      // Vertical drift (March clouds climb high)
      const y = 650 - (progress * 550) + (Math.random() * 100 - 50);

      // 2. Depth and Variety
      return {
        ...day,
        x,
        y,
        // Scale variation creates depth (0.7 is far away, 1.3 is closer)
        scale: 0.7 + (Math.random() * 0.6),
        // Slight natural rotation
        rotation: (Math.random() * 30) - 15,
        moodColor: day.color
      };
    });
  });
}
