import { Component, computed, signal } from '@angular/core';
interface KiteDay {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  tailPath: string;
  moodColor: string;
}
@Component({
  selector: 'app-march',
  imports: [],
  templateUrl: './march.html',
  styleUrl: './march.scss',
})
export class March {
  // Base mood data
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#bae6fd' })));

  // Computed signal to handle all the "attractive" math
  marchKites = computed<KiteDay[]>(() => {
    return this.days().map((day, i) => {
      const row = Math.floor(i / 5);
      const col = i % 5;

      // 1. Add Random Jitter so it's not a perfect grid
      const jitterX = (Math.random() * 40) - 20;
      const jitterY = (Math.random() * 30) - 15;

      // 2. Create a unique wavy tail for each kite
      const wave1 = Math.floor(Math.random() * 20) + 10;
      const wave2 = Math.floor(Math.random() * 20) - 10;
      const tail = `M 20 60 Q ${20 + wave1} 90 20 120 T 20 170`;

      return {
        id: day.id,
        x: col * 90 + jitterX + (row % 2 === 0 ? 0 : 45) + 50,
        y: 500 - (row * 85) + jitterY,
        rotation: (Math.random() * 25) - 12, // Random tilt
        scale: 0.8 + (Math.random() * 0.4), // Random size for depth
        tailPath: tail,
        moodColor: day.color
      };
    });
  });
}
