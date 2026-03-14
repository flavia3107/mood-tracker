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
    const focalPointY = 750; // Anchored slightly lower for better stem curve
    const days = this.days();
    const placedTulips: any[] = [];

    // Strict 125px distance prevents the "clumped" look from previous versions
    const minDistance = 125;

    days.forEach((id, index) => {
      let x = 0, y = 0, angleDeg = 0, stemLength = 0;
      let tooClose = true;
      let attempts = 0;

      while (tooClose && attempts < 400) {
        // Create a wider, more natural oval distribution
        angleDeg = (Math.random() - 0.5) * 160;
        const angleRad = (angleDeg * Math.PI) / 180;

        // Tiered heights (Front: shorter, Back: taller)
        const tier = index % 3;
        stemLength = 280 + (tier * 100) + (Math.random() * 80);

        x = focalPointX + Math.sin(angleRad) * stemLength;
        y = focalPointY - Math.cos(angleRad) * (stemLength * 0.85); // Oval squash

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
        rotation: (Math.random() - 0.5) * 25,
        scale: 1.1 + (Math.random() * 0.2),
        // Bundle stems into a "hand-held" width
        bundleX: focalPointX + (Math.random() - 0.5) * 60,
        bundleY: focalPointY + 20
      });
    });

    return placedTulips.sort((a, b) => a.y - b.y);
  });
}
