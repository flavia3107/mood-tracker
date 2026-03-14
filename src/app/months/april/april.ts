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

    // Strict distance to prevent overlapping more than a quarter
    const minDistance = 125;

    days.forEach((id, index) => {
      let x = 0, y = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 400) {
        // Create a natural field distribution rather than a concentrated bouquet
        x = 100 + Math.random() * 600;
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
        x: x - 50,
        y: y - 50,
        rotation: (Math.random() - 0.5) * 10, // Very slight tilt for realism
        scale: 1.1 + (Math.random() * 0.2),
        // Straight stems go down to a fixed ground line or slightly off-vertical
        groundX: x + (Math.random() - 0.5) * 30,
        groundY: containerHeight - 50
      });
    });

    // Sort by Y-coordinate so tulips in the back are drawn first
    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
