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
    const cols = 6; // 6 columns
    const rows = 5; // 5 rows = 30 days

    for (let i = 1; i <= 30; i++) {
      const col = (i - 1) % cols;
      const row = Math.floor((i - 1) / cols);

      // Positioning logic to create a "falling" scattered look without overlap
      // We use a base grid then add "jitter" (random offset)
      newLeaves.push({
        day: i,
        d: this.leafPath,
        x: 80 + (col * 130) + (Math.random() * 40 - 20),
        y: 80 + (row * 100) + (Math.random() * 40 - 20),
        rotate: Math.random() * 360, // Random rotation for a natural fall
        scale: 0.8 + Math.random() * 0.4 // Varying sizes between 0.8 and 1.2
      });
    }
    this.leaves.set(newLeaves);
  }

  selectLeaf(day: number) {
    console.log(`Day ${day} leaf clicked for mood update!`);
    // Here you would trigger your mood selection logic
  }
}
