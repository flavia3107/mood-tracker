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
    const totalPoints = Math.ceil(totalItems * 1.33); // Points for front and back

    const topY = 35;
    const bottomY = 185;
    const height = bottomY - topY;

    // Boundary config (cite: image_5.png)
    const trunkX = 100; // The vertical center of the tree
    const redLineX = 70; // The absolute left limit
    const safetyBuffer = 5; // Extra units from the boundary
    const leftBoundaryLimit = redLineX + safetyBuffer;

    // Maximum wide radius possible (before boundary check)
    const maxRadiusRaw = 70;
    const minRadius = 5;

    for (let i = 0; i < totalPoints && decs.length < totalItems; i++) {
      const progress = i / (totalPoints - 1);
      const y = topY + (progress * height);

      // 1. Define the normal spiral radius (conical taper cite: image_2.png)
      const currentRadiusRaw = minRadius + (maxRadiusRaw * progress);

      // 2. Taper Logic (as per previous prompt for a tight bottom cite: image_dcf627.jpg)
      let currentRadiusTapered: number;
      if (progress < 0.8) {
        currentRadiusTapered = currentRadiusRaw;
      } else {
        const bottomProgress = (progress - 0.8) / 0.2;
        // Increase tapering multiplier (cite: image_dcf627.jpg) to compress lower lights further.
        currentRadiusTapered = currentRadiusRaw * (1 - (0.5 * bottomProgress));
      }

      // 3. SPIRAL CALCULATION
      // PI * 10 creates extremely dense, tight winding (cite: image_dcf5ad.png).
      const angle = (progress * Math.PI * 10) + Math.PI;
      let x = trunkX + Math.cos(angle) * currentRadiusTapered;

      // 4. BOUNDARY CHECK (Cite: image_5.png)
      // Check if the current position is over the line.
      if (x < leftBoundaryLimit) {
        // Find the boundary radius (cite: image_2.png) based on this y.
        const maxSafeRadiusAtThisY = Math.abs(leftBoundaryLimit - trunkX);

        // Find the nearest safe X by checking which safe radius is closest.
        const nearestSafeXLeft = trunkX - maxSafeRadiusAtThisY;
        const nearestSafeXRight = trunkX + maxSafeRadiusAtThisY;

        // Choose the closest one to maintain flow.
        x = Math.abs(x - nearestSafeXLeft) < Math.abs(x - nearestSafeXRight) ? nearestSafeXLeft : nearestSafeXRight;
      }

      // 5. Visibility check (cite: image_dcf627.jpg) for front-facing lights only.
      // Use cos(angle) to keep them strictly on the front arc.
      const isVisible = Math.cos(angle) > -0.15;

      if (isVisible) {
        decs.push({ x, y });
      }
    }
    return decs;
  }
  get lightWirePath(): string {
    const decs = this.decorations;
    if (decs.length < 2) return '';

    let path = `M ${decs[0].x} ${decs[0].y}`;
    for (let i = 0; i < decs.length - 1; i++) {
      const p1 = decs[i];
      const p2 = decs[i + 1];

      // The "Sag": Creates the heavy hanging effect from your photo
      const cpX = (p1.x + p2.x) / 2;
      const cpY = (p1.y + p2.y) / 2 + 12; // Controls the "weight" of the wire

      path += ` Q ${cpX} ${cpY} ${p2.x} ${p2.y}`;
    }
    return path;
  }

  // getMoodColor(idx: number): string {
  //   const palette = ['#FFF9C4', '#FFECB3', '#FFE082', '#FFF59D']; // Warm white/carnival tones
  //   return palette[idx % palette.length];
  // }
}