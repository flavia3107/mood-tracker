import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  private _utilsService = inject(UtilsService);
  private _monthData = this._utilsService.monthDays;



  getMoodColor(idx: number): string {
    const mood = this._monthData()[idx];
    const palette: Record<string, string> = {
      'great': '#FFD700',
      'good': '#FF3131',
      'meh': '#4CC9FE',
      'none': '#BDE0D0'
    };
    return palette[mood] || palette['none'];
  }
  get decorations() {
    const totalItems = this._monthData();
    const decs: { x: number, y: number }[] = [];

    const topY = 35;
    const bottomY = 195; // Slightly increased to allow more room at the bottom
    const height = bottomY - topY;
    const trunkX = 100;
    const redLineX = 70;

    // The minimum distance between bulb centers to prevent overlapping
    // Bulb radius is 5, so diameter is 10. 11.5 gives a tiny safety gap.
    const minDistance = 11.5;

    for (let i = 0; i < totalItems; i++) {
      let placed = false;
      let attempts = 0;

      // Start with the ideal vertical progress
      let currentY = topY + (i * (height / totalItems));

      while (!placed && attempts < 50) {
        const progress = (currentY - topY) / height;

        // 1. Tapered Radius Logic
        const baseRadius = 5 + (70 * progress);
        const currentRadius = progress < 0.8 ? baseRadius : baseRadius * (1 - (progress - 0.8) * 2.5);

        // 2. Spiral Rotation (Angle)
        const angle = (progress * Math.PI * 14) + Math.PI;
        let x = trunkX + Math.cos(angle) * currentRadius;

        // 3. Red Line Boundary
        if (x < redLineX) {
          x = redLineX + 6; // Nudge in slightly more to account for bulb width
        }

        // 4. OVERLAP CHECK
        // Check distance against all bulbs already in the 'decs' array
        const hasOverlap = decs.some(other => {
          const dx = x - other.x;
          const dy = currentY - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < minDistance;
        });

        if (!hasOverlap) {
          decs.push({ x, y: currentY });
          placed = true;
        } else {
          // If it overlaps, nudge the Y down slightly and try again
          currentY += 1.5;
          attempts++;
        }
      }
    }

    return decs;
  }

}