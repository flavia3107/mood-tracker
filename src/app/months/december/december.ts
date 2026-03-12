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
    const padding = 25; // Space from edges
    const width = 200 - (padding * 2);

    // Total zags (number of times it crosses the hallway)
    const zags = 5;
    const itemsPerZag = Math.ceil(totalItems / zags);

    return Array.from({ length: totalItems }).map((_, i) => {
      const zagIndex = Math.floor(i / itemsPerZag);
      const progressInZag = (i % itemsPerZag) / (itemsPerZag - 1 || 1);

      // Calculate Y: Moves from top to bottom based on total progress
      const totalProgress = i / (totalItems - 1);
      const y = 30 + (totalProgress * 140);

      // Calculate X: Bounce between left and right
      const isGoingRight = zagIndex % 2 === 0;
      let x: number;
      if (isGoingRight) {
        x = padding + (progressInZag * width);
      } else {
        x = (padding + width) - (progressInZag * width);
      }

      return { x, y, r: 3 };
    });
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