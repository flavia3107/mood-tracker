import { Component, signal } from '@angular/core';
interface Chocolate {
  id: number;
  pts: string; // SVG Path data
  cx: number;  // Text X
  cy: number;  // Text Y
  color: string;
}

@Component({
  selector: 'app-february',
  imports: [],
  templateUrl: './february.html',
  styleUrl: './february.scss',
})
export class February {
  selectedMood = '';
  // Chocolate Shard Data (28 Days) - Resized and De-conflicted
  chocolates = signal<Chocolate[]>([
    // Row 1: Top Layer (Shifted and Tilted)
    { id: 2, pts: "M90,155 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0", cx: 120, cy: 160, color: '#fff' },
    { id: 28, pts: "M60,215 a12,12 0 1,1 50,0 a12,12 0 1,1 -50,0", cx: 85, cy: 220, color: '#fff' },
    { id: 1, pts: "M185,185 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 215, cy: 215, color: '#fff' },
    { id: 3, pts: "M315,185 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 345, cy: 215, color: '#fff' },

    // Row 2: Large Squares
    { id: 4, pts: "M140,245 h45 v45 h-45 Z", cx: 162, cy: 267, color: '#fff' },
    { id: 5, pts: "M205,235 h45 v45 h-45 Z", cx: 227, cy: 257, color: '#fff' },
    { id: 6, pts: "M270,235 h45 v45 h-45 Z", cx: 292, cy: 257, color: '#fff' },
    { id: 7, pts: "M335,235 h45 v45 h-45 Z", cx: 357, cy: 257, color: '#fff' },
    { id: 8, pts: "M395,245 h40 v40 h-40 Z", cx: 415, cy: 265, color: '#fff' },

    // Row 3: Horizontal Ovals
    { id: 9, pts: "M130,310 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 165, cy: 328, color: '#fff' },
    { id: 10, pts: "M210,300 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 245, cy: 318, color: '#fff' },
    { id: 25, pts: "M285,305 h22 v22 h-22 Z", cx: 296, cy: 316, color: '#fff' },
    { id: 11, pts: "M315,300 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 350, cy: 318, color: '#fff' },
    { id: 12, pts: "M390,310 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 425, cy: 328, color: '#fff' },

    // Row 4: Mid Squares & Small Circles
    { id: 13, pts: "M170,365 h40 v40 h-40 Z", cx: 190, cy: 385, color: '#fff' },
    { id: 26, pts: "M220,380 a12,12 0 1,1 24,0 a12,12 0 1,1 -24,0", cx: 232, cy: 392, color: '#fff' },
    { id: 14, pts: "M240,355 h45 v45 h-45 Z", cx: 262, cy: 377, color: '#fff' },
    { id: 15, pts: "M305,355 h45 v45 h-45 Z", cx: 327, cy: 377, color: '#fff' },
    { id: 27, pts: "M355,380 a12,12 0 1,1 24,0 a12,12 0 1,1 -24,0", cx: 367, cy: 392, color: '#fff' },
    { id: 16, pts: "M380,365 h40 v40 h-40 Z", cx: 400, cy: 385, color: '#fff' },

    // Row 5: Bottom Ovals & Tip
    { id: 17, pts: "M210,425 a25,12 0 1,1 50,0 a25,12 0 1,1 -50,0", cx: 235, cy: 437, color: '#fff' },
    { id: 18, pts: "M265,415 a25,12 0 1,1 50,0 a25,12 0 1,1 -50,0", cx: 290, cy: 427, color: '#fff' },
    { id: 19, pts: "M320,425 a25,12 0 1,1 50,0 a25,12 0 1,1 -50,0", cx: 345, cy: 437, color: '#fff' },
    { id: 22, pts: "M275,450 a18,18 0 1,1 36,0 a18,18 0 1,1 -36,0", cx: 293, cy: 468, color: '#fff' },

    // Fillers
    { id: 20, pts: "M145,190 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0", cx: 165, cy: 210, color: '#fff' },
    { id: 21, pts: "M375,190 a20,20 0 1,1 40,0 a20,20 0 1,1 -40,0", cx: 395, cy: 210, color: '#fff' },
    { id: 23, pts: "M235,215 h25 v25 h-25 Z", cx: 247, cy: 227, color: '#fff' },
    { id: 24, pts: "M300,215 h25 v25 h-25 Z", cx: 312, cy: 227, color: '#fff' }
  ]);
  updateMood(day: any) {

  }

  getLeafTransform(leafIndex: number): string {
    const rotations = [-70, 140];
    const offsets = [
      { x: 140, y: 60 },
      { x: 240, y: 120 },
    ];

    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) scale(1.3) rotate(${rotations[leafIndex]}, 40, 60)`;
  }
}
