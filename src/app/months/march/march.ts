import { Component, computed, signal } from '@angular/core';

interface CloudDay {
  id: number;
  x: number;
  y: number;
  scale: number;
  moodColor: string;
}

@Component({
  selector: 'app-march',
  templateUrl: './march.html',
  styleUrl: './march.scss',
  standalone: true
})
export class March {
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#f8fafc' })));

  marchClouds = computed<CloudDay[]>(() => {
    const clouds: CloudDay[] = [];
    const minDistance = 75; // Minimum pixels between cloud centers
    const width = 800;
    const height = 720;

    this.days().forEach((day) => {
      let x = 0, y = 0;
      let collision = true;
      let attempts = 0;

      // Try up to 50 times to find a clear spot
      while (collision && attempts < 50) {
        x = 50 + Math.random() * (width - 150);
        y = 50 + Math.random() * (height - 150);

        // Check distance against all clouds already placed
        collision = clouds.some(c => {
          const dx = c.x - x;
          const dy = c.y - y;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        attempts++;
      }

      clouds.push({
        ...day,
        x,
        y,
        scale: 0.8 + (Math.random() * 0.5),
        moodColor: day.color
      });
    });

    return clouds;
  });
}