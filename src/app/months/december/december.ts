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

  private tiers = [
    { y: 60, amplitude: 15 },
    { y: 130, amplitude: 15 }
  ];

  get decorations() {
    const totalItems = this._monthData(); // Now treating this as a number
    const half = Math.ceil(totalItems / 2);

    return Array.from({ length: totalItems }).map((_, i) => {
      const isTopTier = i < half;
      const tier = isTopTier ? this.tiers[0] : this.tiers[1];

      const indexInTier = isTopTier ? i : i - half;
      const itemsInTier = isTopTier ? half : totalItems - half;

      // Calculate horizontal progress (0 to 1)
      const progress = itemsInTier > 1 ? indexInTier / (itemsInTier - 1) : 0.5;

      const x = 20 + (progress * 160);
      const sag = tier.amplitude * 4 * (progress * (1 - progress));
      const y = tier.y + sag;

      return { x, y, r: i % 4 === 0 ? 4 : 3 };
    });
  }

  // // Updated to handle the number input
  // getMoodColor(idx: number): string {
  //   const palette = ['#FFD700', '#FF3131', '#4CC9FE', '#BDE0D0'];
  //   // Logic to pick a color based on index since we don't have a status string
  //   return palette[idx % palette.length];
  // }

  get lightWirePath(): string {
    const decs = this.decorations;
    if (decs.length === 0) return '';

    const totalItems = this._monthData();
    const half = Math.ceil(totalItems / 2);

    const drawTier = (startIdx: number, endIdx: number) => {
      if (startIdx >= endIdx) return '';
      let path = `M ${decs[startIdx].x} ${decs[startIdx].y}`;
      for (let i = startIdx; i < endIdx - 1; i++) {
        // Create a smooth curve between bulbs
        const cpX = (decs[i].x + decs[i + 1].x) / 2;
        const cpY = Math.max(decs[i].y, decs[i + 1].y) + 3; // Extra dip for the wire
        path += ` Q ${cpX} ${cpY} ${decs[i + 1].x} ${decs[i + 1].y}`;
      }
      return path;
    };

    return drawTier(0, half) + " " + drawTier(half, totalItems);
  }
}