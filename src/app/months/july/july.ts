import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
interface Day {
  id: number;
  moodColor: string;
  x: number;
  y: number;
}
@Component({
  selector: 'app-july',
  imports: [],
  templateUrl: './july.html',
  styleUrl: './july.scss',
})
export class July {
  // Your 31 days data
  days = signal<Day[]>(this.generateJulyData());

  private generateJulyData(): Day[] {
    const hexWidth = 50;
    const horizontalSpacing = 44;
    const verticalSpacing = 38;

    return Array.from({ length: 31 }, (_, i) => {
      // Basic grid math
      const row = Math.floor(i / 4); // 4 hexagons per row
      const col = i % 4;

      // The Magic: Offset every odd row
      const xOffset = (row % 2 === 1) ? horizontalSpacing / 2 : 0;

      return {
        id: i + 1,
        moodColor: '#fef3c7', // Default honey color
        x: col * horizontalSpacing + xOffset,
        y: row * verticalSpacing
      };
    });
  }

  // Group them for your "2-3 clusters" idea
  julyGroups = computed(() => [
    this.days().slice(0, 10),
    this.days().slice(10, 20),
    this.days().slice(20, 31)
  ]);
}
