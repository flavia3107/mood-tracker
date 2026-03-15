import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Ghost {
  id: number;
  color: string;
  x: number;
  y: number;
  rotation: number;
}
@Component({
  selector: 'app-october',
  standalone: true,
  imports: [],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  ghosts: Ghost[] = [];
  selectedColor = '#FF9100';

  moods = [
    { label: 'Happy', color: '#FFD54F' },
    { label: 'Normal', color: '#B0BEC5' },
    { label: 'Spooky', color: '#9575CD' },
    { label: 'Sad', color: '#4FC3F7' }
  ];

  ngOnInit() {
    this.generateGhosts();
  }

  generateGhosts() {
    this.ghosts = Array.from({ length: 31 }, (_, i) => ({
      id: i + 1,
      color: '#ffffff', // Default ghost white
      // Random-ish scattering logic
      x: 10 + (i % 6) * 65 + (Math.random() * 15),
      y: 20 + Math.floor(i / 6) * 75 + (Math.random() * 20),
      rotation: Math.random() * 30 - 15 // Slight tilt left or right
    }));
  }

  updateMood(index: number) {
    this.ghosts[index].color = this.selectedColor;
  }
}