import { Component, signal } from '@angular/core';
import { MoodPicker } from '../../mood-picker/mood-picker';
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
  imports: [MoodPicker],
  templateUrl: './february.html',
  styleUrl: './february.scss',
})
export class February {
  selectedMood = '';
  // Chocolate Shard Data (28 Days) - Resized and De-conflicted
  chocolates = signal<Chocolate[]>([
    // Row 1: Top Layer
    { id: 2, pts: "M90,140 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0", cx: 120, cy: 145, color: '#fff', rotate: 5 },
    { id: 28, pts: "M370,390 a12,12 0 1,1 50,0 a12,12 0 1,1 -50,0", cx: 390, cy: 390, color: '#fff', rotate: -10 },
    { id: 1, pts: "M45,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 75, cy: 210, color: '#fff', rotate: 5 },
    { id: 3, pts: "M305,210 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0", cx: 335, cy: 215, color: '#fff', rotate: 5 },

    // // Row 2: Large Squares
    { id: 4, pts: "M180,150 h70 v50 h-70 Z", cx: 215, cy: 180, color: '#fff', rotate: 55 },
    { id: 5, pts: "M370,220 h50 v50 h-50 Z", cx: 395, cy: 245, color: '#fff', rotate: -6 },
    { id: 6, pts: "M250,215 h50 v70 h-50 Z", cx: 275, cy: 260, color: '#fff', rotate: 0 },
    { id: 7, pts: "M310,255 h50 v50 h-50 Z", cx: 335, cy: 280, color: '#fff', rotate: -3 },
    { id: 8, pts: "M390,285 h70 v70 h-70 Z", cx: 425, cy: 325, color: '#fff', rotate: 25 },

    // // Row 3: Horizontal Ovals
    { id: 9, pts: "M115,205 a35,18 0 1,1 80,0 a35,18 0 1,1 -80,0", cx: 150, cy: 210, color: '#fff', rotate: 5 },
    { id: 27, pts: "M155,320 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 200, cy: 330, color: '#fff', rotate: -15 },
    { id: 21, pts: "M255,295 h50 v50 h-50 Z", cx: 280, cy: 320, color: '#fff', rotate: -5 },
    { id: 11, pts: "M320,345 a35,18 0 1,1 70,0 a35,18 0 1,1 -70,0", cx: 355, cy: 350, color: '#fff', rotate: 80 },
    { id: 12, pts: "M50,295 a35,18 0 1,1 90,0 a35,18 0 1,1 -90,0", cx: 100, cy: 300, color: '#fff', rotate: 60 },

    // // Row 4: Mid Squares & Large Circles
    { id: 13, pts: "M125,235 h60 v60 h-60 Z", cx: 155, cy: 270, color: '#fff', rotate: 0 },
    { id: 26, pts: "M192,490 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 215, cy: 490, color: '#fff', rotate: -9 },
    { id: 23, pts: "M105,350 h70 v50 h-70 Z", cx: 140, cy: 380, color: '#fff', rotate: 50 },
    { id: 25, pts: "M280,350 h50 v50 h-50 Z", cx: 305, cy: 380, color: '#fff', rotate: -4 },
    { id: 10, pts: "M425,215 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 450, cy: 220, color: '#fff', rotate: 11 },
    { id: 16, pts: "M320,395 h50 v50 h-50 Z", cx: 340, cy: 420, color: '#fff', rotate: 55 },

    // // Row 5: Bottom V-Shape
    { id: 24, pts: "M250,470 a30,15 0 1,1 65,0 a30,15 0 1,1 -65,0", cx: 280, cy: 475, color: '#fff', rotate: -25 },
    { id: 18, pts: "M425,260 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 453, cy: 263, color: '#fff', rotate: 5 },
    { id: 19, pts: "M145,445 a30,15 0 1,1 60,0 a30,15 0 1,1 -60,0", cx: 175, cy: 445, color: '#fff', rotate: 50 },
    { id: 22, pts: "M245,425 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 270, cy: 435, color: '#fff', rotate: 0 },

    // // Fillers
    { id: 20, pts: "M192,430 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 210, cy: 430, color: '#fff', rotate: 15 },
    { id: 15, pts: "M375,190 a25,25 0 1,1 50,0 a25,25 0 1,1 -50,0", cx: 400, cy: 190, color: '#fff', rotate: -15 },
    { id: 14, pts: "M193,230 h50 v50 h-50 Z", cx: 215, cy: 260, color: '#fff', rotate: 5 },
    { id: 17, pts: "M200,345 h50 v50 h-50 Z", cx: 225, cy: 375, color: '#fff', rotate: -15 }
  ]);


  updateDay(chocolate: Chocolate) {
    if (this.selectedMood)
      chocolate.color = this.selectedMood;
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

  updateMood(color: string) {
    this.selectedMood = color;
  }
}
