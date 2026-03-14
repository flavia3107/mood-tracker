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
    const focalPointY = 720;
    const days = this.days();
    const placedTulips: any[] = [];
    const minDistance = 115; // Strict "Quarter Overlap" rule

    days.forEach((id) => {
      let x = 0, y = 0, angleDeg = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 300) {
        angleDeg = (Math.random() - 0.5) * 150;
        const angleRad = (angleDeg * Math.PI) / 180;
        const stemLength = 250 + (Math.random() * 350);

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
        x: x - 50, // Offset for the 100x100 symbol
        y: y - 50,
        rotation: (Math.random() - 0.5) * 20,
        scale: 1.1 + Math.random() * 0.2,
        // Add a tiny bit of random offset to the "gathering point" for a natural look
        bundleX: focalPointX + (Math.random() - 0.5) * 40,
        bundleY: focalPointY
      });
    });

    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
