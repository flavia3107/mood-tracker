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
    const focalPointX = 400;
    const focalPointY = 700;
    const days = this.days();
    const placedTulips: any[] = [];

    // Strict 115px distance to honor the "quarter overlap" rule
    const minDistance = 115;

    days.forEach((id) => {
      let x = 0, y = 0, angleDeg = 0, stemLength = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 250) {
        angleDeg = (Math.random() - 0.5) * 140;
        const angleRad = (angleDeg * Math.PI) / 180;
        stemLength = 280 + (Math.random() * 320);

        x = focalPointX + Math.sin(angleRad) * stemLength;
        y = focalPointY - Math.cos(angleRad) * stemLength;

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
        rotation: (Math.random() - 0.5) * 15,
        scale: 1.2,
        stemX: focalPointX,
        stemY: focalPointY
      });
    });

    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
