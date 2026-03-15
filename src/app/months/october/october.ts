import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface FacetDay {
  id: number;
  color: string;
  points: string; // SVG polygon points string
  centerX: number; // For label placement
  centerY: number;
}

@Component({
  selector: 'app-october',
  standalone: true,
  imports: [],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  selectedColor = '#ffd3b6'; // Default mood color
  days: FacetDay[] = [];

  // Mood colors inspired by the peach/yellow tones in image_21.png
  moods = [
    { label: 'Happy/Excited', color: '#ffaaa5' }, // Peach
    { label: 'Good/Normal', color: '#ffd3b6' },   // Light Orange
    { label: 'Calm/Relaxed', color: '#a8e6cf' }, // Mint Green
    { label: 'Tired/Low', color: '#B0BEC5' },      // Grey
    { label: 'Spooky/Stressed', color: '#9575CD' } // Purple
  ];

  ngOnInit() {
    this.generateFacets();
  }

  generateFacets() {
    const facetData = [
      // --- TOP LOBES (Days 1-7) ---
      { pts: "100,100 180,95 140,150", cx: 140, cy: 115 },
      { pts: "180,95 250,95 220,150", cx: 215, cy: 110 },
      { pts: "250,95 320,95 280,150", cx: 285, cy: 110 },
      { pts: "320,95 400,100 360,150", cx: 360, cy: 115 },
      { pts: "140,150 220,150 180,95", cx: 180, cy: 135 },
      { pts: "250,55 350,65 320,95", cx: 305, cy: 75 },
      { pts: "250,55 250,95 180,95", cx: 230, cy: 80 },

      // --- OUTER SIDES (Days 8-15) ---
      { pts: "100,100 40,200 140,150", cx: 85, cy: 155 },
      { pts: "400,100 460,200 360,150", cx: 415, cy: 155 },
      { pts: "40,200 70,300 140,240", cx: 80, cy: 250 },
      { pts: "460,200 430,300 360,240", cx: 420, cy: 250 },
      { pts: "70,300 100,380 150,340", cx: 100, cy: 345 },
      { pts: "430,300 400,380 350,340", cx: 400, cy: 345 },
      { pts: "140,150 140,240 40,200 40,200", cx: 100, cy: 190 },
      { pts: "360,150 360,240 430,212 460,200", cx: 400, cy: 190 },

      // --- AROUND THE FACE (Days 16-24) ---
      { pts: "140,150 250,150 210,210", cx: 190, cy: 175 },
      { pts: "360,150 250,150 290,210", cx: 310, cy: 175 },
      { pts: "140,240 250,240 180,285", cx: 180, cy: 260 },
      { pts: "360,240 250,240 320,285", cx: 320, cy: 260 },
      { pts: "140,150 140,240 255,240", cx: 150, cy: 175 },
      { pts: "360,150 360,240 290,210", cx: 335, cy: 200 },
      { pts: "250,150 250,240 210,205", cx: 240, cy: 195 },
      { pts: "250,150 250,240 290,210", cx: 260, cy: 195 },
      { pts: "140,240 150,340 180,285", cx: 155, cy: 280 },

      // --- BOTTOM CHIN (Days 25-31) ---
      { pts: "360,240 350,340 320,285", cx: 345, cy: 290 },
      { pts: "180,285 320,285 250,340", cx: 250, cy: 305 },
      { pts: "150,340 250,340 200,400", cx: 200, cy: 365 },
      { pts: "350,340 250,340 300,400", cx: 300, cy: 365 },
      { pts: "100,380 200,400 150,340", cx: 150, cy: 375 },
      { pts: "400,380 300,400 350,340", cx: 350, cy: 375 },
      { pts: "200,400 300,400 250,340", cx: 250, cy: 380 }
    ];

    this.days = facetData.map((data, i) => ({
      id: i + 1,
      color: '#ffffff',
      points: data.pts,
      centerX: data.cx,
      centerY: data.cy
    }));
  }
  updateDayMood(index: number) {
    this.days[index].color = this.selectedColor;
  }
}