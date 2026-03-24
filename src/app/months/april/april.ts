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
  curveIntensity = 125; // Horizontal bowing
  topCurveY = 90;      // Lower number = sharper curve at the top

  umbrellaSlices = Array.from({ length: this.totalDays }, (_, i) => {
    const day = i + 1;
    const t1 = i / this.totalDays;
    const t2 = (i + 1) / this.totalDays;

    // 1. Top Ridge (180 to 220)
    const tx1 = 180 + (40 * t1);
    const tx2 = 180 + (40 * t2);
    const topY = 70;

    // 2. Bottom Boundary Mapping
    const getBottomPoint = (t: number) => {
      if (t < 0.25) {
        const localT = t / 0.25;
        return { x: 25 + (100 * localT), y: 275 + (35 * localT) };
      } else if (t < 0.75) {
        const localT = (t - 0.25) / 0.5;
        return { x: 125 + (150 * localT), y: 310 };
      } else {
        const localT = (t - 0.75) / 0.25;
        return { x: 275 + (100 * localT), y: 310 - (35 * localT) };
      }
    };

    const p1 = getBottomPoint(t1);
    const p2 = getBottomPoint(t2);

    // 3. High-Curve Control Point Logic
    // We move the control point X further out, and keep Y high (near 90-110)
    const getControlX = (topX: number, bottomX: number) => {
      const midX = (topX + bottomX) / 2;
      const offset = ((midX - 200) / 200) * this.curveIntensity;
      return midX + offset;
    };

    const cx1 = getControlX(tx1, p1.x);
    const cx2 = getControlX(tx2, p2.x);

    return {
      day,
      // Using topCurveY (90) creates a much rounder "shoulder" near the handle
      path: `M${tx1},${topY} 
             Q${cx1},${this.topCurveY} ${p1.x.toFixed(1)},${p1.y.toFixed(1)} 
             L${p2.x.toFixed(1)},${p2.y.toFixed(1)} 
             Q${cx2},${this.topCurveY} ${tx2},${topY} Z`,
      label: {
        x: ((p1.x + p2.x) / 2).toFixed(1),
        y: (day % 2 === 0 ? 215 : 245)
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
