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
  private _monthData = this._utilsService.calendarDays;

  get lightWirePath(): string {
    const points = [];
    const steps = 60; // More steps = smoother curve
    const startY = 35;
    const endY = 175;

    for (let i = 0; i <= steps; i++) {
      const y = startY + (i * (endY - startY) / steps);
      const distanceFromTop = y - 25;
      const maxWidth = (distanceFromTop * 0.42);
      const x = 100 + (Math.sin(i * 0.4) * maxWidth);
      points.push({ x, y });
    }

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const xc = (points[i].x + points[i - 1].x) / 2;
      const yc = (points[i].y + points[i - 1].y) / 2;
      path += ` Q ${points[i - 1].x} ${points[i - 1].y}, ${xc} ${yc}`;
    }
    return path;
  }

  decorations = Array.from({ length: 31 }, (_, i) => {
    const y = 35 + (i * 4.6);
    const distanceFromTop = y - 25;
    const maxWidth = (distanceFromTop * 0.42);
    const x = 100 + (Math.sin(i * 1.1) * maxWidth);

    return {
      x, y,
      r: i % 4 === 0 ? 4 : 2.5,
    };
  });

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

  generateCurvedPath(): string {
    if (this.decorations.length === 0) return '';

    let path = `M ${this.decorations[0].x} ${this.decorations[0].y}`;
    for (let i = 0; i < this.decorations.length - 1; i++) {
      const start = this.decorations[i];
      const end = this.decorations[i + 1];
      const cpX = (start.x + end.x) / 2;
      const cpY = Math.max(start.y, end.y) + 2;
      path += ` Q ${cpX} ${cpY} ${end.x} ${end.y}`;
    }
    return path;
  }
}