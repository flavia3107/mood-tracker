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
  selectedColor = '#FFB300';

  // Custom coordinates to fit the "Bumpy" pumpkin base
  items = [
    { id: 1, x: 100, y: 320, rotation: 5, color: '#fff' },
    { id: 2, x: 150, y: 340, rotation: -10, color: '#fff' },
    { id: 3, x: 200, y: 350, rotation: 0, color: '#fff' },
    { id: 4, x: 250, y: 340, rotation: 12, color: '#fff' },
    { id: 5, x: 300, y: 320, rotation: -5, color: '#fff' },
    { id: 6, x: 335, y: 280, rotation: 20, color: '#fff' },
    { id: 7, x: 290, y: 285, rotation: -8, color: '#fff' },
    { id: 8, x: 240, y: 300, rotation: 5, color: '#fff' },
    { id: 9, x: 195, y: 305, rotation: -3, color: '#fff' },
    { id: 10, x: 145, y: 295, rotation: 10, color: '#fff' },
    { id: 11, x: 95, y: 275, rotation: -12, color: '#fff' },
    { id: 12, x: 75, y: 230, rotation: 15, color: '#fff' },
    { id: 13, x: 120, y: 245, rotation: -5, color: '#fff' },
    { id: 14, x: 170, y: 255, rotation: 0, color: '#fff' },
    { id: 15, x: 220, y: 255, rotation: 8, color: '#fff' },
    { id: 16, x: 270, y: 240, rotation: -10, color: '#fff' },
    { id: 17, x: 320, y: 230, rotation: 5, color: '#fff' },
    { id: 18, x: 340, y: 180, rotation: -15, color: '#fff' },
    { id: 19, x: 295, y: 195, rotation: 10, color: '#fff' },
    { id: 20, x: 245, y: 210, rotation: -5, color: '#fff' },
    { id: 21, x: 195, y: 215, rotation: 3, color: '#fff' },
    { id: 22, x: 145, y: 205, rotation: -8, color: '#fff' },
    { id: 23, x: 95, y: 190, rotation: 12, color: '#fff' },
    { id: 24, x: 115, y: 145, rotation: -5, color: '#fff' },
    { id: 25, x: 165, y: 165, rotation: 7, color: '#fff' },
    { id: 26, x: 215, y: 170, rotation: -3, color: '#fff' },
    { id: 27, x: 265, y: 155, rotation: 10, color: '#fff' },
    { id: 28, x: 310, y: 140, rotation: -12, color: '#fff' },
    { id: 29, x: 240, y: 120, rotation: 5, color: '#fff' },
    { id: 30, x: 190, y: 125, rotation: -8, color: '#fff' },
    { id: 31, x: 140, y: 110, rotation: 10, color: '#fff' }
  ];

  updateColor(index: number) {
    this.items[index].color = this.selectedColor;
  }
}