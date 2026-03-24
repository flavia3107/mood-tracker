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
  // Higher number = more "inflated" look
  curveIntensity = 45;

  umbrellaSlices = Array.from({ length: this.totalDays }, (_, i) => {
    const day = i + 1;
    const t1 = i / this.totalDays;
    const t2 = (i + 1) / this.totalDays;

    // 1. Top Point (The shared ridge)
    const getTopX = (t: number) => 180 + (40 * t);
    const topY = 70;

    // 2. Bottom Point (Mapping to your specific path)
    const getBottomPoint = (t: number) => {
      let x, y;
      if (t < 0.25) { // Far Left Arc
        const localT = t / 0.25;
        x = 25 + (100 * localT);
        y = 275 + (35 * localT);
      } else if (t < 0.75) { // Flat Bottom
        const localT = (t - 0.25) / 0.5;
        x = 125 + (150 * localT);
        y = 310;
      } else { // Far Right Arc
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

    // 3. CURVATURE CALCULATION
    // This calculates how far to push the "rib" based on its distance from center
    const getControlX = (topX: number, bottomX: number) => {
      const midX = (topX + bottomX) / 2;
      const offset = ((midX - 200) / 200) * this.curveIntensity;
      return midX + offset;
    };

    const cx1 = getControlX(tx1, p1.x);
    const cx2 = getControlX(tx2, p2.x);
    const midY = (topY + 310) / 2;

    return {
      day,
      path: `M${tx1},${topY} 
             Q${cx1},${midY} ${p1.x.toFixed(1)},${p1.y.toFixed(1)} 
             L${p2.x.toFixed(1)},${p2.y.toFixed(1)} 
             Q${cx2},${midY} ${tx2},${topY} Z`,
      label: {
        x: ((p1.x + p2.x) / 2).toFixed(1),
        y: (day % 2 === 0 ? 210 : 250) // Staggered slightly higher to stay in the wide part
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
