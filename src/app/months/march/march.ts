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
  // Mood palette based on your image
  // 1. Mood Configuration
  readonly moods = [
    { label: 'happy', color: '#D4E157' },
    { label: 'neutral', color: '#9CCC65' },
    { label: 'stressed', color: '#689F38' },
    { label: 'tired', color: '#455A64' },
    { label: 'moody', color: '#2E7D32' },
    { label: 'sad', color: '#546E7A' }
  ];

  // 2. Signals for State
  selectedMood = signal<string>(this.moods[0].color);
  days = signal(Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    color: '#FFFFFF'
  })));

  // 3. Methods
  setMood(color: string) {
    this.selectedMood.set(color);
  }

  updateDay(id: number) {
    this.days.update(current =>
      current.map(d => d.id === id ? { ...d, color: this.selectedMood() } : d)
    );
  }

  // Generates geometric shards for the clover
  getPathForDay(index: number): string {
    const cx = 200, cy = 200;
    const angle = (index / 31) * 2 * Math.PI - Math.PI / 2; // Offset to start at top
    const nextAngle = ((index + 1) / 31) * 2 * Math.PI - Math.PI / 2;

    // Formula for a 4-leaf clover shape
    const getR = (a: number) => 150 * Math.abs(Math.cos(2 * a)) + 20;

    const r1 = getR(angle);
    const r2 = getR(nextAngle);

    const x1 = cx + r1 * Math.cos(angle);
    const y1 = cy + r1 * Math.sin(angle);
    const x2 = cx + r2 * Math.cos(nextAngle);
    const y2 = cy + r2 * Math.sin(nextAngle);

    return `M ${cx},${cy} L ${x1},${y1} L ${x2},${y2} Z`;
  }
}