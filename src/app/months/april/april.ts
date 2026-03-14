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
    const focalPointY = 650;
    const days = this.days();
    const placedTulips: any[] = [];

    // Enforced spacing: 85-90 units ensures minimal overlap (roughly 1/4 or less)
    const minDistance = 88;

    days.forEach((id) => {
      let x = 0, y = 0, angleDeg = 0, stemLength = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 100) {
        // 1. Randomize within a loose bouquet arc
        angleDeg = (Math.random() - 0.5) * 130; // Fan width
        const angleRad = (angleDeg * Math.PI) / 180;

        // Variable lengths to create the "cloud" effect
        stemLength = 220 + (Math.random() * 200);

        x = focalPointX + Math.sin(angleRad) * stemLength;
        y = focalPointY - Math.cos(angleRad) * stemLength;

        // 2. Check overlap against already placed tulips
        tooClose = placedTulips.some(other => {
          const dx = x - other.centerX;
          const dy = y - other.centerY;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });

        attempts++;
      }

      placedTulips.push({
        id,
        centerX: x, // Used for collision math
        centerY: y,
        x: x - 50,  // Offset for 100px symbol alignment
        y: y - 50,
        rotation: (Math.random() - 0.5) * 20, // Keep them looking UP
        scale: 1.1 + Math.random() * 0.2,
        stemX: focalPointX,
        stemY: focalPointY,
        stemRotation: angleDeg,
        stemLength: stemLength
      });
    });

    // Sort by Y so tulips in the "back" are drawn first
    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
