import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface TrackerItem {
  id: number;
  x: number;
  y: number;
  color: string;
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
  selectedColor = '#a8e6cf'; // Default mood

  // Hand-plotted positions to look like they are sitting in the pumpkin
  items: TrackerItem[] = [
    { id: 1, x: 105, y: 245, rotation: 5, color: '#fff' },
    { id: 2, x: 140, y: 255, rotation: -10, color: '#fff' },
    { id: 3, x: 180, y: 260, rotation: 0, color: '#fff' },
    { id: 4, x: 220, y: 255, rotation: 15, color: '#fff' },
    { id: 5, x: 260, y: 245, rotation: -5, color: '#fff' },
    { id: 6, x: 300, y: 230, rotation: 20, color: '#fff' },
    { id: 7, x: 325, y: 195, rotation: -15, color: '#fff' },
    { id: 8, x: 285, y: 205, rotation: 10, color: '#fff' },
    { id: 9, x: 245, y: 215, rotation: 5, color: '#fff' },
    { id: 10, x: 200, y: 220, rotation: -5, color: '#fff' },
    { id: 11, x: 155, y: 215, rotation: 0, color: '#fff' },
    { id: 12, x: 115, y: 205, rotation: 12, color: '#fff' },
    { id: 13, x: 85, y: 175, rotation: -8, color: '#fff' },
    { id: 14, x: 125, y: 170, rotation: 5, color: '#fff' },
    { id: 15, x: 90, y: 135, rotation: 10, color: '#fff' },
    { id: 16, x: 105, y: 95, rotation: -5, color: '#fff' },
    { id: 17, x: 145, y: 130, rotation: 0, color: '#fff' },
    { id: 18, x: 170, y: 175, rotation: -12, color: '#fff' },
    { id: 19, x: 210, y: 175, rotation: 8, color: '#fff' },
    { id: 20, x: 240, y: 185, rotation: -3, color: '#fff' },
    { id: 21, x: 275, y: 165, rotation: 15, color: '#fff' },
    { id: 22, x: 340, y: 155, rotation: -10, color: '#fff' },
    { id: 23, x: 315, y: 120, rotation: 5, color: '#fff' },
    { id: 24, x: 295, y: 80, rotation: -15, color: '#fff' },
    { id: 25, x: 260, y: 110, rotation: 10, color: '#fff' },
    { id: 26, x: 220, y: 130, rotation: -5, color: '#fff' },
    { id: 27, x: 185, y: 135, rotation: 0, color: '#fff' },
    { id: 28, x: 135, y: 85, rotation: 12, color: '#fff' },
    { id: 29, x: 175, y: 95, rotation: -8, color: '#fff' },
    { id: 30, x: 215, y: 85, rotation: 5, color: '#fff' },
    { id: 31, x: 255, y: 85, rotation: 10, color: '#fff' }
  ];

  moods = [
    { label: 'Exceptional', color: '#a8e6cf' },
    { label: 'Happy', color: '#ffd3b6' },
    { label: 'Relaxed', color: '#ffaaa5' },
    { label: 'Irritable', color: '#ff8b94' },
    { label: 'Stressed', color: '#dcedc1' },
    { label: 'Sad', color: '#a2d2ff' }
  ];

  updateColor(index: number) {
    this.items[index].color = this.selectedColor;
  }
}