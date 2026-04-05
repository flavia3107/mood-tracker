import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-december',
  imports: [MoodPicker],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  private _utilsService = inject(UtilsService);
  private _monthData = this._utilsService.monthDays;
  private _selectedColor = '';
  public readonly decorations = this._calculateDecorations();

  private _calculateDecorations() {
    const totalItems = this._monthData();
    const decs: { x: number, y: number, color: string }[] = [];
    const topY = 35;
    const bottomY = 195;
    const height = bottomY - topY;
    const trunkX = 100;
    const redLineX = 70;
    const minDistance = 11.5;

    for (let i = 0; i < totalItems; i++) {
      let placed = false;
      let attempts = 0;
      let currentY = topY + (i * (height / totalItems));

      while (!placed && attempts < 50) {
        const progress = (currentY - topY) / height;
        const baseRadius = 5 + (70 * progress);
        const currentRadius = progress < 0.8 ? baseRadius : baseRadius * (1 - (progress - 0.8) * 2.5);
        const angle = (progress * Math.PI * 14) + Math.PI;
        let x = trunkX + Math.cos(angle) * currentRadius;

        // 3. Red Line Boundary
        if (x < redLineX) {
          x = redLineX + 6;
        }

        // 4. OVERLAP CHECK
        const hasOverlap = decs.some(other => {
          const dx = x - other.x;
          const dy = currentY - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < minDistance;
        });

        if (!hasOverlap) {
          decs.push({ x, y: currentY, color: '#fff' });
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

  updateMood(day: any) {
    if (this._selectedColor && day['color'] === '#fff')
      day.color = this._selectedColor;
  }

  updateColor(color: string) {
    this._selectedColor = color;
  }
}