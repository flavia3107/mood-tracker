import { Component, signal } from '@angular/core';
interface Leaf {
  day: number;
  d: string; // SVG Path
  x: number;
  y: number;
  rotate: number;
  scale: number;
}
@Component({
  selector: 'app-september',
  imports: [],
  templateUrl: './september.html',
  styleUrl: './september.scss',
})
export class September {
  // Signal to store our 30 leaves
  leaves = signal<Leaf[]>([]);
  private readonly leafPath = "M20,0 L22,2 L28,0 L30,5 L38,2 L40,10 L45,15 L40,22 L42,30 L35,35 L30,42 L20,55 L10,42 L5,35 L-2,30 L0,22 L-5,15 L0,10 L2,5 L10,0 L18,2 Z";
  ngOnInit() {
    this.generateFallingLeaves();
  }

  generateFallingLeaves() {
    const newLeaves: Leaf[] = [];
    const cols = 6;
    const cellWidth = 120;
    const cellHeight = 95;
    const startX = 100; // Left margin
    const startY = 70;  // Top margin

    for (let i = 1; i <= 30; i++) {
      const col = (i - 1) % cols;
      const row = Math.floor((i - 1) / cols);
      const stagger = (row % 2 === 0) ? 0 : 40;
      const jitterX = (Math.random() - 0.5) * 30;
      const jitterY = (Math.random() - 0.5) * 20;

      newLeaves.push({
        day: i,
        d: this.leafPath,
        x: startX + (col * cellWidth) + stagger + jitterX,
        y: startY + (row * cellHeight) + jitterY,
        rotate: Math.random() * 360,
        scale: 0.85 + Math.random() * 0.25
      });
    }
    this.leaves.set(newLeaves);
  }

  selectLeaf(day: number) {
    console.log(`Day ${day} leaf clicked for mood update!`);
    // Here you would trigger your mood selection logic
  }
}
