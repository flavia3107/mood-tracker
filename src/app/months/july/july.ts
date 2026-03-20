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
  cols = 5;
  moods = [
    { label: 'Happy/Excited', color: '#ffaaa5' }, // Peach
    { label: 'Good/Normal', color: '#ffd3b6' },   // Light Orange
    { label: 'Calm/Relaxed', color: '#a8e6cf' }, // Mint Green
    { label: 'Tired/Low', color: '#B0BEC5' },      // Grey
    { label: 'Spooky/Stressed', color: '#9575CD' } // Purple
  ];
  selectedColor = '#ffd3b6'; // Default mood color
  hexWidth = 50;
  hexHeight = 58;
  julyDays = signal(Array.from({ length: 31 }, (_, i) => {
    const row = Math.floor(i / this.cols);
    const col = i % this.cols;
    const xSpacing = 52;
    const ySpacing = 45;
    const xOffset = (row % 2 !== 0) ? xSpacing / 2 : 0;

    return {
      id: i + 1,
      x: col * xSpacing + xOffset,
      y: row * ySpacing,
      moodColor: '#fff'
    };
  }));

  getMoodColor(idx: number): string {
    // Same logic as before
    return '#FFFFFF';
  }

  updateDayMood(index: number) {
    this.julyDays()[index].moodColor = this.selectedColor;
  }
}
