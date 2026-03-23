import { Component, signal } from '@angular/core';
interface Chocolate {
  id: number;
  pts: string; // SVG Path data
  cx: number;  // Text X
  cy: number;  // Text Y
  color: string;
  rotate: number
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
    { id: 2, pts: "M90,140 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0", cx: 120, cy: 145, color: '#fff', rotate: 5 },
    // { id: 28, pts: "M60,215 a12,12 0 1,1 50,0 a12,12 0 1,1 -50,0", cx: 85, cy: 220, color: '#fff', rotate: -10 },
    { id: 1, pts: "M45,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 75, cy: 210, color: '#fff', rotate: 5 },
    { id: 3, pts: "M305,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 335, cy: 215, color: '#fff', rotate: 5 },

    // // Row 2: Large Squares
    { id: 4, pts: "M180,150 h70 v50 h-70 Z", cx: 210, cy: 180, color: '#fff', rotate: 55 },
    { id: 5, pts: "M380,200 h80 v60 h-80 Z", cx: 415, cy: 235, color: '#fff', rotate: -6 },
    { id: 6, pts: "M240,225 h50 v70 h-50 Z", cx: 265, cy: 260, color: '#fff', rotate: 15 },
    { id: 7, pts: "M310,255 h50 v50 h-50 Z", cx: 335, cy: 280, color: '#fff', rotate: -3 },
    { id: 8, pts: "M390,285 h70 v70 h-70 Z", cx: 425, cy: 325, color: '#fff', rotate: 25 },

    // // Row 3: Horizontal Ovals
    { id: 9, pts: "M115,205 a35,18 0 1,1 80,0 a35,18 0 1,1 -80,0", cx: 150, cy: 210, color: '#fff', rotate: 5 },
    { id: 10, pts: "M175,325 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 220, cy: 330, color: '#fff', rotate: 5 },
    // { id: 25, pts: "M265,295 h50 v50 h-50 Z", cx: 290, cy: 320, color: '#fff', rotate: -5 },
    { id: 11, pts: "M345,375 a35,18 0 1,1 80,0 a35,18 0 1,1 -80,0", cx: 385, cy: 380, color: '#fff', rotate: 8 },
    { id: 12, pts: "M50,295 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 100, cy: 300, color: '#fff', rotate: 60 },

    // // Row 4: Mid Squares & Large Circles
    { id: 13, pts: "M135,235 h60 v60 h-60 Z", cx: 160, cy: 275, color: '#fff', rotate: 10 },
    // { id: 26, pts: "M205,385 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 230, cy: 410, color: '#fff', rotate: -9 },
    { id: 14, pts: "M115,350 h70 v50 h-70 Z", cx: 140, cy: 380, color: '#fff', rotate: 50 },
    { id: 15, pts: "M280,325 h50 v50 h-50 Z", cx: 305, cy: 350, color: '#fff', rotate: -4 },
    // { id: 27, pts: "M345,385 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 370, cy: 410, color: '#fff', rotate: 11 },
    // { id: 16, pts: "M370,370 h50 v50 h-50 Z", cx: 395, cy: 395, color: '#fff', rotate: -7 },

    // // Row 5: Bottom V-Shape
    // { id: 17, pts: "M175,440 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 205, cy: 455, color: '#fff', rotate: -10 },
    // { id: 18, pts: "M250,425 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 280, cy: 440, color: '#fff', rotate: 5 },
    // { id: 19, pts: "M325,440 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 355, cy: 455, color: '#fff', rotate: 12 },
    // { id: 22, pts: "M250,480 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 275, cy: 505, color: '#fff', rotate: 0 },

    // // Fillers
    // { id: 20, pts: "M90,165 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 115, cy: 190, color: '#fff', rotate: 15 },
    // { id: 21, pts: "M360,165 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 385, cy: 190, color: '#fff', rotate: -15 },
    // { id: 23, pts: "M205,190 h50 v50 h-50 Z", cx: 230, cy: 215, color: '#fff', rotate: 5 },
    // { id: 24, pts: "M295,190 h50 v50 h-50 Z", cx: 320, cy: 215, color: '#fff', rotate: -5 }
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
