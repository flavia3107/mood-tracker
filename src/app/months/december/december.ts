import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  sparkles = Array.from({ length: 40 }, () => ({
    x: Math.random() * 200,
    y: Math.random() * 200,
    r: 0.5 + Math.random() * 1,
    delay: Math.random() * 3
  }));

  // Logic to keep ornaments strictly inside the tree triangles
  ornaments = Array.from({ length: 31 }, (_, i) => {
    const y = 45 + (i * 4.2);
    // The higher the Y, the wider the allowed X range
    const treeWidth = (y - 25) * 0.65;
    const x = 100 + (Math.sin(i * 1.5) * (treeWidth * 0.8));
    return { x, y, r: i % 5 === 0 ? 4.5 : 3.2 };
  });

  getMoodColor(idx: number): string {
    const palette: any = {
      'great': '#FFD700', 'good': '#FF5252', 'meh': '#4FC3F7', 'none': '#2C3E50'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
