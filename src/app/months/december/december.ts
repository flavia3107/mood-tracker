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
    const maxLightsPerRow = 6;
    let itemsPlaced = 0;

    // Conical definition: Top point, bottom diameter, total height
    const topY = 25;
    const baseY = 190;
    const baseWidth = 140;

    const rowSpacing = (baseY - topY) / Math.ceil(totalItems / (maxLightsPerRow / 2));

    // Generate lights in layered arcs following the tree shape
    for (let rowIdx = 0; rowIdx < 6 && itemsPlaced < totalItems; rowIdx++) {
      const rowY = topY + rowIdx * rowSpacing;
      const progress = (rowY - topY) / (baseY - topY);

      // Calculate row width based on a linear taper (cone)
      const currentRowWidth = baseWidth * progress;
      const startX = 100 - (currentRowWidth / 2);

      const isEvenRow = rowIdx % 2 === 0;
      const rowLightsCount = Math.min(itemsPlaced + maxLightsPerRow, totalItems) - itemsPlaced;

      for (let i = 0; i < rowLightsCount; i++) {
        // Reverse direction on even rows to alternate placement flow
        const colIdx = isEvenRow ? i : rowLightsCount - 1 - i;
        const progressInRow = colIdx / (rowLightsCount - 1 || 1);

        const rawX = startX + progressInRow * currentRowWidth;
        const rawY = rowY;

        // Apply a mathematical bulge (bezier-like curve) to mimic the branch texture from image_2.png
        const bulgeAmount = progress < 0.3 ? 2 : 7; // Top is tighter, bottom branches are wider
        const xOffset = Math.sin(progressInRow * Math.PI) * -bulgeAmount;
        const yOffset = Math.sin(progressInRow * Math.PI) * bulgeAmount * 0.8;

        decs.push({
          x: rawX + xOffset,
          y: rawY + yOffset
        });
        itemsPlaced++;
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