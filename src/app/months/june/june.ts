import { Component, signal } from "@angular/core";

interface Segment {
  id: number;
  points: string;
  color: string;
}

@Component({
  selector: 'app-june',
  standalone: true,
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  selectedColor = signal<string>('#D32F2F');

  // State for each segment: [index] = color
  // Initializing with some "colored" values to match your image
  segmentColors = signal<string[]>(new Array(31).fill('#FFFFFF'));

  moods = [
    { label: 'Feliz', color: '#D32F2F' },
    { label: 'Tranquila', color: '#F08080' },
    { label: 'Enferma', color: '#D4E157' }
  ];

  // These paths define the "shattered" mosaic look
  // I've simplified the coordinates to fit a 500x600 viewBox
  segments = [
    { id: 1, d: "M250,50 L210,120 L290,120 Z" }, // Top tip
    { id: 2, d: "M210,120 L180,180 L250,190 L290,120 Z" },
    { id: 3, d: "M290,120 L250,190 L330,200 L350,160 Z" },
    { id: 4, d: "M180,180 L150,260 L220,270 L250,190 Z" },
    // ... In a full app, you'd define all 31 unique "shattered" paths here
  ];

  setColor(index: number) {
    const newColors = [...this.segmentColors()];
    newColors[index] = this.selectedColor();
    this.segmentColors.set(newColors);
  }

}