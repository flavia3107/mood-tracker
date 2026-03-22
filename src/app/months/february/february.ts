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
  // Chocolate Shard Data (28 Days)
  chocolates = signal<Chocolate[]>([
    // Row 1
    { id: 1, pts: "M170,180 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 195, cy: 185, color: '#FBF8F4' },
    { id: 2, pts: "M225,140 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 250, cy: 145, color: '#FBF8F4' },
    { id: 3, pts: "M280,180 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 305, cy: 185, color: '#FBF8F4' },
    // Row 2
    { id: 4, pts: "M120,220 h40 v40 h-40 Z", cx: 140, cy: 245, color: '#FBF8F4' },
    { id: 5, pts: "M180,210 h40 v40 h-40 Z", cx: 200, cy: 235, color: '#FBF8F4' },
    { id: 6, pts: "M240,210 h40 v40 h-40 Z", cx: 260, cy: 235, color: '#FBF8F4' },
    { id: 7, pts: "M300,210 h40 v40 h-40 Z", cx: 320, cy: 235, color: '#FBF8F4' },
    { id: 8, pts: "M360,220 h35 v35 h-35 Z", cx: 377, cy: 242, color: '#FBF8F4' },
    // Row 3 (Ovals)
    { id: 9, pts: "M110,280 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 140, cy: 285, color: '#FBF8F4' },
    { id: 10, pts: "M185,270 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 215, cy: 275, color: '#FBF8F4' },
    { id: 11, pts: "M260,270 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 290, cy: 275, color: '#FBF8F4' },
    { id: 12, pts: "M330,280 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 360, cy: 285, color: '#FBF8F4' },
    // Row 4
    { id: 13, pts: "M150,320 h35 v35 h-35 Z", cx: 167, cy: 342, color: '#FBF8F4' },
    { id: 14, pts: "M205,310 h40 v40 h-40 Z", cx: 225, cy: 335, color: '#FBF8F4' },
    { id: 15, pts: "M265,310 h40 v40 h-40 Z", cx: 285, cy: 335, color: '#FBF8F4' },
    { id: 16, pts: "M325,320 h35 v35 h-35 Z", cx: 342, cy: 342, color: '#FBF8F4' },
    // Row 5
    { id: 17, pts: "M180,370 a20,10 0 1,1 40,0 a20,10 0 1,1 -40,0", cx: 200, cy: 375, color: '#FBF8F4' },
    { id: 18, pts: "M230,360 a20,10 0 1,1 40,0 a20,10 0 1,1 -40,0", cx: 250, cy: 365, color: '#FBF8F4' },
    { id: 19, pts: "M280,370 a20,10 0 1,1 40,0 a20,10 0 1,1 -40,0", cx: 300, cy: 375, color: '#FBF8F4' },
    // Fillers for sides
    { id: 20, pts: "M125,160 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0", cx: 140, cy: 165, color: '#FBF8F4' },
    { id: 21, pts: "M345,160 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0", cx: 360, cy: 165, color: '#FBF8F4' },
    { id: 22, pts: "M235,395 a15,15 0 1,1 30,0 a15,15 0 1,1 -30,0", cx: 250, cy: 400, color: '#FBF8F4' },
    { id: 23, pts: "M210,185 h20 v20 h-20 Z", cx: 220, cy: 198, color: '#FBF8F4' },
    { id: 24, pts: "M270,185 h20 v20 h-20 Z", cx: 280, cy: 198, color: '#FBF8F4' },
    { id: 25, pts: "M240,260 h20 v20 h-20 Z", cx: 250, cy: 273, color: '#FBF8F4' },
    { id: 26, pts: "M190,340 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0", cx: 200, cy: 345, color: '#FBF8F4' },
    { id: 27, pts: "M290,340 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0", cx: 300, cy: 345, color: '#FBF8F4' },
    { id: 28, pts: "M240,115 a10,10 0 1,1 20,0 a10,10 0 1,1 -20,0", cx: 250, cy: 120, color: '#FBF8F4' }
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
