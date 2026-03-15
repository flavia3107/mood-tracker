import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface DaySegment {
  id: number;
  color: string;
  x: number;
  y: number;
}

@Component({
  selector: 'app-october',
  standalone: true,
  imports: [],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  days: DaySegment[] = [];
  selectedColor = '#FF9100';

  moods = [
    { label: 'Amazing', color: '#FF9100' },
    { label: 'Good', color: '#FFD54F' },
    { label: 'Neutral', color: '#A1887F' },
    { label: 'Spooky', color: '#4A148C' }
  ];

  ngOnInit() {
    this.generateCoordinates();
  }

  generateCoordinates() {
    this.days = Array.from({ length: 31 }, (_, i) => {
      const col = i % 6;
      const row = Math.floor(i / 6);
      return {
        id: i + 1,
        color: '#2a2a2a', // Dark "unfilled" color
        x: 70 + col * 50,
        y: 80 + row * 50
      };
    });
  }

  selectMood(color: string) {
    this.selectedColor = color;
  }

  updateDay(index: number) {
    this.days[index].color = this.selectedColor;
  }
}