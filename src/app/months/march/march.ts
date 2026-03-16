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

  // 31 Days: 8 per leaf for first 3, 7 for the last.
  days = signal(Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    color: '#FFFFFF'
  })));

  // These coordinates define 8 shards for ONE vertical heart-shaped leaf
  // Center is 0,0 for easier rotation logic
  readonly leafShards = [
    "M0,0 L-20,-40 L0,-60 Z",   // Inner left
    "M0,0 L0,-60 L20,-40 Z",    // Inner right
    "M-20,-40 L-50,-50 L-30,-80 Z", // Far left mid
    "M-20,-40 L-30,-80 L0,-60 Z",   // Left top hump
    "M0,-60 L30,-80 L20,-40 Z",    // Right top hump
    "M20,-40 L30,-80 L50,-50 Z",   // Far right mid
    "M-20,-40 L-50,-50 L-30,-20 Z", // Bottom left curve
    "M20,-40 L50,-50 L30,-20 Z"     // Bottom right curve
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

  // Helper to place and rotate each shard
  getTransform(index: number): string {
    const leafIndex = Math.floor(index / 8);
    const rotation = leafIndex * 90;
    // Centers the clover at 200, 200
    return `translate(200, 200) rotate(${rotation})`;
  }

  getShardPath(index: number): string {
    return this.leafShards[index % 8];
  }
}