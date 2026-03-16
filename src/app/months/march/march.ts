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

  // Shards relative to 100x100 leaf box
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
    const gap = 8; // Slightly larger gap for the larger head

    // Centered at 200, 180 (moved up to make room for stem)
    const offsets = [
      { x: 150, y: 80 - gap },
      { x: 200 + gap, y: 130 },
      { x: 150, y: 180 + gap },
      { x: 100 - gap, y: 130 }
    ];

    const pos = offsets[leafIndex];
    // Added scale(1.3) to make the head bigger
    return `translate(${pos.x}, ${pos.y}) scale(1.3) rotate(${rotations[leafIndex]}, 50, 50)`;
  }
}