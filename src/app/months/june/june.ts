import { Component, signal } from "@angular/core";

interface Segment {
  id: number;
  points: string;
  color: string;
}

@Component({
  selector: 'app-june',
  standalone: true,
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  // Use Signals for state - standard for Angular 21
  selectedColor = signal<string>('#D32F2F');

  // A Map to track colored segments efficiently
  filledSegments = signal<Map<number, string>>(new Map());

  moods = [
    { label: 'Feliz', color: '#D32F2F' },
    { label: 'Tranquila', color: '#F08080' },
    { label: 'Enferma', color: '#D4E157' }
  ];

  // Logic to generate the 31 polygons for the watermelon wedge
  segments = signal<Segment[]>(this.generateSegments());

  private generateSegments(): Segment[] {
    const totalDays = 31;
    const items: Segment[] = [];
    const centerX = 250;
    const topY = 100;
    const height = 350;

    // Mathematical grid to form the large wedge
    for (let i = 1; i <= totalDays; i++) {
      // Logic for triangular tessellation
      const row = Math.floor(Math.sqrt(i - 1));
      const col = (i - 1) - row * row;
      const x = centerX + (col - row) * 25;
      const y = topY + row * 45;

      items.push({
        id: i,
        points: `${x},${y} ${x - 25},${y + 45} ${x + 25},${y + 45}`,
        color: '#fff'
      });
    }
    return items;
  }

  updateColor(id: number) {
    const newMap = new Map(this.filledSegments());
    newMap.set(id, this.selectedColor());
    this.filledSegments.set(newMap);
  }
}