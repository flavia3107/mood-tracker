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
    const totalLightsGoal = Math.ceil(totalItems / 3) * 4; // Buffer for "behind-the-tree" loops

    // Tree conical definition:
    const topY = 30; // Star height
    const bottomY = 190; // Lowest point
    const height = bottomY - topY;
    const maxRadius = 75; // Widest possible part (at bottom)
    const minRadius = 5; // Near the star top

    // Step calculation optimized for current Items
    const stepSize = height / totalLightsGoal;

    for (let i = 0; i < totalLightsGoal && decs.length < totalItems; i++) {
      const pointY = topY + i * stepSize;
      const progress = (pointY - topY) / height;

      // Calculate radius *based on progress* down the cone (tapers downward!)
      const currentRadius = minRadius + (maxRadius * progress);

      // Define angle based on progress. Tighter loops (*7) increase crowd.
      const angle = (progress * Math.PI * 7) + Math.PI;

      // Standard central X (100)
      const rawX = 100 + Math.cos(angle) * currentRadius;
      const rawY = pointY;

      // APPLY A SECOND TAPER - The Tighter Bottom offset (cite: image_2.png)
      // This forces the lower points to stick *closer* to the trunk/conical core.
      const bulgeAmount = 2 + (5 * progress); // Tighter on top, slightly wider bottom
      const yTaperFactor = Math.sin(progress * Math.PI) * bulgeAmount * 0.8;

      // Create a logical 3-on-1-off cycle to simulate looping behind (cite: image_2.png)
      const isVisible = (i % 4) < 3;

      if (isVisible) {
        decs.push({
          x: rawX,
          y: rawY + yTaperFactor
        });
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