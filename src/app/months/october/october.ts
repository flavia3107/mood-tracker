import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Pumpkin {
  id: number;
  color: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  type: number; // 0: round, 1: tall, 2: wide
}

@Component({
  selector: 'app-october',
  standalone: true,
  imports: [],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  pumpkins: Pumpkin[] = [];
  selectedColor = '#FB8C00'; // Default Harvest Orange

  moods = [
    { label: 'Great', color: '#E65100' },
    { label: 'Good', color: '#FB8C00' },
    { label: 'Meh', color: '#795548' },
    { label: 'Spooky', color: '#4A148C' }
  ];

  ngOnInit() {
    this.generatePatch();
  }

  generatePatch() {
    this.pumpkins = Array.from({ length: 31 }, (_, i) => ({
      id: i + 1,
      color: '#FFF3E0', // Uncolored "paper" color
      // Scattering logic to look like a field
      x: 30 + (i % 6) * 60 + (Math.random() * 20),
      y: 40 + Math.floor(i / 6) * 70 + (Math.random() * 20),
      scale: 0.8 + Math.random() * 0.4,
      rotation: Math.random() * 20 - 10,
      type: Math.floor(Math.random() * 3)
    }));
  }

  fillPumpkin(index: number) {
    this.pumpkins[index].color = this.selectedColor;
  }
}