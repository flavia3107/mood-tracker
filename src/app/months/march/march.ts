import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-march',
  standalone: true,
  templateUrl: './march.html',
  styleUrls: ['./march.scss']
})
export class March {
  readonly moods = [
    { label: 'happy', color: '#D4E157' },
    { label: 'neutral', color: '#9CCC65' },
    { label: 'stressed', color: '#689F38' },
    { label: 'tired', color: '#455A64' },
    { label: 'moody', color: '#2E7D32' },
    { label: 'sad', color: '#546E7A' }
  ];

  selectedMood = signal<string>(this.moods[0].color);
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#FFFFFF' })));

  // Shard paths relative to the 100x100 leaf box
  readonly shardPaths = [
    "M50,100 L10,65 L50,55 Z", "M50,100 L50,55 L90,65 Z",
    "M10,65 L0,35 L40,20 Z", "M40,20 L50,55 L10,65 Z",
    "M40,20 L50,5 L60,20 Z", "M60,20 L50,55 L40,20 Z",
    "M90,65 L50,55 L60,20 Z", "M100,35 L90,65 L60,20 Z"
  ];

  setMood(color: string) {
    this.selectedMood.set(color);
  }

  updateDay(index: number) {
    this.days.update(current => {
      const updated = [...current];
      updated[index].color = this.selectedMood();
      return updated;
    });
  }

  getLeafTransform(leafIndex: number): string {
    const rotations = [0, 90, 180, 270];

    // GAP ADJUSTMENT: 
    // Increasing/decreasing these numbers pushes the leaves away from center.
    const gap = 4;
    const offsets = [
      { x: 150, y: 100 - gap }, // Top (moved up)
      { x: 200 + gap, y: 150 }, // Right (moved right)
      { x: 150, y: 200 + gap }, // Bottom (moved down)
      { x: 100 - gap, y: 150 }  // Left (moved left)
    ];

    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) rotate(${rotations[leafIndex]}, 50, 50)`;
  }
}