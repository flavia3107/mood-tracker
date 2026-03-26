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
    const decs = [];

    const topY = 35;
    const bottomY = 185;
    const height = bottomY - topY;
    const trunkX = 100;
    const redLineX = 70;

    // 1. Calculate a vertical step that spans the entire tree height
    // This ensures no two bulbs are vertically 'on top' of each other.
    const verticalStep = height / (totalItems + 2);

    for (let i = 0; i < totalItems; i++) {
      // 2. Uniform Y distribution
      const y = topY + (i + 1) * verticalStep;
      const progress = (y - topY) / height;

      // 3. Conical Radius Logic (Tapers near top and bottom)
      const baseRadius = 5 + (70 * progress);
      const currentRadius = progress < 0.8 ? baseRadius : baseRadius * (1 - (progress - 0.8) * 2.5);

      // 4. Spiral Rotation
      // We increase the winding (e.g., 12 * PI) so the string wraps many times.
      const angle = (progress * Math.PI * 12) + Math.PI;

      let x = trunkX + Math.cos(angle) * currentRadius;

      // 5. Red Line Boundary Enforcement
      // Instead of skipping points, we push them to the left 'edge'
      if (x < redLineX) {
        x = redLineX + 2; // Keep it just inside the line
      }

      decs.push({ x, y });
    }

    return decs;
  }

}