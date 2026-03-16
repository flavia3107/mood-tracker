import { KeyValuePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface CloudDay {
  id: number;
  x: number;
  y: number;
  scale: number;
  moodColor: string;
}

@Component({
  selector: 'app-march',
  templateUrl: './march.html',
  styleUrl: './march.scss',
  standalone: true
})
export class March {
  // days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#f8fafc' })));
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

  // Geometric shards relative to a 100x100 leaf area
  readonly shardPaths = [
    "M50,100 L10,60 L50,50 Z", "M50,100 L50,50 L90,60 Z",
    "M10,60 L0,30 L40,15 Z", "M40,15 L50,50 L10,60 Z",
    "M40,15 L50,0 L60,15 Z", "M60,15 L50,50 L40,15 Z",
    "M90,60 L50,50 L60,15 Z", "M100,30 L90,60 L60,15 Z"
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
    // These offsets are calculated to make the 'tip' (50,100) of the heart 
    // sit exactly at the center (200, 200) of the SVG.
    const offsets = [
      { x: 150, y: 100 }, // Top
      { x: 200, y: 150 }, // Right
      { x: 150, y: 200 }, // Bottom
      { x: 100, y: 150 }  // Left
    ];
    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) rotate(${rotations[leafIndex]}, 50, 50)`;
  }
}