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
    // Row 1: Top Layer
    { id: 2, pts: "M90,155 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0", cx: 120, cy: 160, color: '#fff' },
    { id: 28, pts: "M60,215 a12,12 0 1,1 50,0 a12,12 0 1,1 -50,0", cx: 85, cy: 220, color: '#fff' },
    { id: 1, pts: "M155,170 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 185, cy: 200, color: '#fff' },
    { id: 3, pts: "M285,170 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 315, cy: 200, color: '#fff' },

    // Row 2: Large Squares (All 50x50 minimum)
    { id: 4, pts: "M100,230 h50 v50 h-50 Z", cx: 125, cy: 255, color: '#fff' },
    { id: 5, pts: "M170,220 h50 v50 h-50 Z", cx: 195, cy: 245, color: '#fff' },
    { id: 6, pts: "M240,220 h50 v50 h-50 Z", cx: 265, cy: 245, color: '#fff' },
    { id: 7, pts: "M310,220 h50 v50 h-50 Z", cx: 335, cy: 245, color: '#fff' },
    { id: 8, pts: "M380,230 h50 v50 h-50 Z", cx: 405, cy: 255, color: '#fff' },

    // Row 3: Horizontal Ovals (Minimum width 70, height 36 for visibility)
    { id: 9, pts: "M90,300 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 125, cy: 318, color: '#fff' },
    { id: 10, pts: "M180,290 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 215, cy: 308, color: '#fff' },
    { id: 25, pts: "M255,290 h50 v50 h-50 Z", cx: 280, cy: 315, color: '#fff' }, // Enlarged tiny square to 50
    { id: 11, pts: "M315,290 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 350, cy: 308, color: '#fff' },
    { id: 12, pts: "M400,300 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 435, cy: 318, color: '#fff' },

    // Row 4: Mid Squares & Small Circles (Resized)
    { id: 13, pts: "M140,360 h50 v50 h-50 Z", cx: 165, cy: 385, color: '#fff' },
    { id: 26, pts: "M200,370 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 225, cy: 395, color: '#fff' }, // Tiny circle to 50
    { id: 14, pts: "M210,350 h50 v50 h-50 Z", cx: 235, cy: 375, color: '#fff' },
    { id: 15, pts: "M280,350 h50 v50 h-50 Z", cx: 305, cy: 375, color: '#fff' },
    { id: 27, pts: "M340,370 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 365, cy: 395, color: '#fff' }, // Tiny circle to 50
    { id: 16, pts: "M360,360 h50 v50 h-50 Z", cx: 385, cy: 385, color: '#fff' },

    // Row 5: Bottom Ovals & Tip
    { id: 17, pts: "M180,420 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 210, cy: 435, color: '#fff' },
    { id: 18, pts: "M250,410 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 280, cy: 425, color: '#fff' },
    { id: 19, pts: "M320,420 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 350, cy: 435, color: '#fff' },
    { id: 22, pts: "M250,455 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 275, cy: 480, color: '#fff' }, // Enlarged to 50

    // Fillers (All enlarged to 50)
    { id: 20, pts: "M110,170 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 135, cy: 195, color: '#fff' },
    { id: 21, pts: "M350,170 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 375, cy: 195, color: '#fff' },
    { id: 23, pts: "M205,200 h50 v50 h-50 Z", cx: 230, cy: 225, color: '#fff' },
    { id: 24, pts: "M285,200 h50 v50 h-50 Z", cx: 310, cy: 225, color: '#fff' }
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
