import { Component } from '@angular/core';

@Component({
  selector: 'app-december',
  imports: [],
  templateUrl: './december.html',
  styleUrl: './december.scss',
})
export class December {
  monthData: string[] = Array(31).fill('none');
  // Static lights that are always "on"
  staticLights = Array.from({ length: 25 }, () => ({
    x: 100 + (Math.random() * 120 - 60),
    y: 50 + Math.random() * 120,
    r: 1.5
  })).filter(l => { // Keep lights inside tree triangle
    const widthAtY = (l.y - 30) * 0.7;
    return l.x > 100 - widthAtY && l.x < 100 + widthAtY;
  });

  // 31 Tracking Decorations with different shapes/sizes
  ornaments = Array.from({ length: 31 }, (_, i) => {
    const y = 55 + (i * 4);
    const widthAtY = (y - 35) * 0.6;
    return {
      x: 100 + (Math.sin(i * 1.5) * widthAtY),
      y: y,
      size: i % 3 === 0 ? 5 : 4, // Varying sizes
      shape: i % 3 === 0 ? 'circle' : (i % 3 === 1 ? 'teardrop' : 'star')
    };
  });

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#FFD700', 'good': '#FF4D4D', 'meh': '#4D94FF', 'none': '#334155'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }
}
