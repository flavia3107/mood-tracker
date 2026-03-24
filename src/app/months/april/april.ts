import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-april',
  imports: [],
  templateUrl: './april.html',
  styleUrl: './april.scss',
})
export class April {
  readonly moods = [
    { label: 'happy', color: '#D4E157' },
    { label: 'neutral', color: '#9CCC65' },
    { label: 'stressed', color: '#689F38' },
    { label: 'tired', color: '#455A64' },
    { label: 'moody', color: '#2E7D32' },
    { label: 'sad', color: '#546E7A' }
  ];

  selectedMood = signal<string>(this.moods[0].color);
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#FFFFFF' })));

  totalDays = 30;
  umbrellaSlices = Array.from({ length: this.totalDays }, (_, i) => {
    const day = i + 1;
    const t1 = i / this.totalDays;
    const t2 = (i + 1) / this.totalDays;

    // 1. Calculate Top Points (interpolating the top ridge)
    const topY = 70;
    const getTopX = (t: number) => 180 + (40 * t); // Spans the ridge from 180 to 220

    // 2. Calculate Bottom Points (follows the complex bottom path)
    const getBottomPoint = (t: number) => {
      let x, y;
      if (t < 0.25) { // Left Curve (Q)
        const localT = t / 0.25;
        x = 25 + (100 * localT);
        y = 275 + (35 * localT);
      } else if (t < 0.75) { // Middle Flat (L)
        const localT = (t - 0.25) / 0.5;
        x = 125 + (150 * localT);
        y = 310;
      } else { // Right Curve (Q)
        const localT = (t - 0.75) / 0.25;
        x = 275 + (100 * localT);
        y = 310 - (35 * localT);
      }
      return { x, y };
    };

    const p1 = getBottomPoint(t1);
    const p2 = getBottomPoint(t2);
    const tx1 = getTopX(t1);
    const tx2 = getTopX(t2);

    // 3. Control point for the "bulge" (middle of the slice)
    const midX1 = (tx1 + p1.x) / 2 + (p1.x < 200 ? -10 : 10);
    const midX2 = (tx2 + p2.x) / 2 + (p2.x < 200 ? -10 : 10);

    return {
      day,
      // Path: Move to top-left, Curve to bottom-left, Line to bottom-right, Curve back to top-right
      path: `M${tx1},${topY} 
             Q${midX1},${(topY + p1.y) / 2} ${p1.x.toFixed(1)},${p1.y.toFixed(1)} 
             L${p2.x.toFixed(1)},${p2.y.toFixed(1)} 
             Q${midX2},${(topY + p2.y) / 2} ${tx2},${topY} Z`,
      label: {
        x: ((p1.x + p2.x) / 2).toFixed(1),
        y: (day % 2 === 0 ? 220 : 255) // Staggered for readability
      }
    };
  });

  setMood(color: string) {
    this.selectedMood.set(color);
  }

  updateDay(index: number) {
    this.days.update(current => {
      const updated = [...current];
      updated[index].color = this.selectedMood();
      return updated;
    });
  }
}
