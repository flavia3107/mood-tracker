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
  // State for the currently active marker color
  selectedColor = signal<string>('#D32F2F');
  wedgePath = signal("M 250,30 L 470,440 Q 250,570 30,440 Z");

  // We define three unique paths for the three overlapping strokes.
  // Each is offset slightly to create the texture seen in the photo.
  rindPathBase = signal("M 470,440 Q 250,570 30,440"); // Solid Mint base
  rindPathMid = signal("M 465,445 Q 250,565 35,445"); // Translucent Green mid
  rindPathOuter = signal("M 460,455 Q 250,560 40,455"); // Translucent Dark Green edge
  // Tracking the color of each of the 31 days
  // Initialized to white (#FFFFFF)
  days = signal<string[]>(new Array(31).fill('#FFFFFF'));

  // The palette from your photo
  moods = [
    { label: 'Feliz', color: '#D32F2F' },
    { label: 'Contenta', color: '#E57373' },
    { label: 'Tranquila', color: '#F8BBD0' },
    { label: 'Molesta', color: '#FFCCBC' },
    { label: 'Enferma', color: '#D4E157' },
    { label: 'Triste', color: '#AFB42B' }
  ];

  // Helper to update the color of a specific segment
  colorDay(index: number) {
    const currentDays = [...this.days()];
    currentDays[index] = this.selectedColor();
    this.days.set(currentDays);
  }

  // // Paths for the "Shattered" Mosaic segments
  // // These are roughly mapped to fill the wedge triangle
  segments = [
    //   { id: 1, d: "M250,40 L220,100 L280,100 Z" },
    //   { id: 2, d: "M220,100 L190,160 L250,170 L280,100 Z" },
    //   { id: 3, d: "M280,100 L250,170 L310,160 L340,110 Z" },
    //   // ... Simplified for brevity, in production you'd have 31 unique paths here
  ];
}