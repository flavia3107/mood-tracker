import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-april',
  imports: [],
  templateUrl: './april.html',
  styleUrl: './april.scss',
})
export class April {
  days = signal(Array.from({ length: 31 }, (_, i) => i + 1));
  aprilTulips = computed(() => {
    const containerWidth = 800;
    const containerHeight = 850;
    const days = this.days();
    const placedTulips: any[] = [];

    // Strict spacing: 120px is roughly the width of one tulip + a small gap
    const minDistance = 120;

    days.forEach((id) => {
      let x = 0, y = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 800) {
        // Keep them within the 800px width with a bit of padding
        x = 80 + Math.random() * 640;
        // Keep them in the top 2/3rds of the height
        y = 100 + Math.random() * 500;

        tooClose = placedTulips.some(other => {
          const dx = x - other.centerX;
          const dy = y - other.centerY;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
        attempts++;
      }

      placedTulips.push({
        id,
        centerX: x,
        centerY: y,
        x: x - 50, // Centers the 100x100 symbol
        y: y - 50,
        rotation: (Math.random() - 0.5) * 15,
        scale: 1.2,
        // Stems go straight down to the "ground"
        groundX: x,
        groundY: 820
      });
    });

    // Critical for overlapping: Sort so bottom-most flowers draw LAST (on top)
    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
