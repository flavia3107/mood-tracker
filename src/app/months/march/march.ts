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

  // 31 Days total
  days = signal(Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    color: '#FFFFFF'
  })));

  // This defines the geometric triangles inside a single heart "box"
  // Coordinates are relative to a 100x100 leaf area
  readonly shardPaths = [
    "M50,100 L20,70 L50,50 Z",   // Bottom left inner
    "M50,100 L50,50 L80,70 Z",   // Bottom right inner
    "M20,70 L0,40 L30,20 Z",     // Middle left
    "M30,20 L50,50 L20,70 Z",    // Center left
    "M30,20 L50,0 L70,20 Z",     // Top middle peak
    "M70,20 L50,50 L30,20 Z",    // Center top
    "M80,70 L50,50 L70,20 Z",    // Center right
    "M100,40 L80,70 L70,20 Z"    // Middle right
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
    const offsets = [
      { x: 150, y: 50 },  // Top
      { x: 250, y: 150 }, // Right
      { x: 150, y: 250 }, // Bottom
      { x: 50, y: 150 }   // Left
    ];
    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) rotate(${rotations[leafIndex]}, 50, 50)`;
  }
}