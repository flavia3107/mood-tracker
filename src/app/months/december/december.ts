import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  // Static Background Sparkles
  sparkles = Array.from({ length: 40 }, () => ({
    x: Math.random() * 200,
    y: Math.random() * 180,
    r: Math.random() * 1.2,
    delay: Math.random() * 2
  }));

  // 31 Tracking Ornaments following the tree curvature
  ornaments = Array.from({ length: 31 }, (_, i) => {
    const y = 45 + (i * 4.2);
    const widthAtY = (y - 30) * 0.65;
    return {
      x: 100 + (Math.sin(i * 1.2) * widthAtY),
      y: y,
      r: i % 5 === 0 ? 4.5 : 3 // Varying sizes
    };
  });

  getMoodColor(idx: number): string {
    const palette: any = {
      'great': '#FFD700', 'good': '#FF4D4D', 'meh': '#4D94FF', 'none': '#334155'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
