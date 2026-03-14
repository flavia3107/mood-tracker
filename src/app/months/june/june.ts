import { Component, signal } from '@angular/core';

interface IceCreamUnit {
  id: number,
  x: number;
  y: number;
  scoops: (string | null)[];
  rotation: number
}

@Component({
  selector: 'app-june',
  standalone: true, // Standard for modern Angular
  imports: [],
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  // Use a computed-like approach or an effect to generate this if you want it to change 
  // every refresh. Here we initialize it once.
  iceCreams = signal<IceCreamUnit[]>(this.generateJuneCones());

  private generateJuneCones(): IceCreamUnit[] {
    const totalDays = 30;
    let daysAllocated = 0;
    const units: any[] = [];
    let id = 1;

    const minDistance = 8; // Minimum distance in 'rem' to prevent overlapping
    const maxAttempts = 50; // How many times to try placing a cone before giving up

    while (daysAllocated < totalDays) {
      const remaining = totalDays - daysAllocated;
      const scoopCount = Math.min(Math.floor(Math.random() * 3) + 1, remaining);

      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        // Generate random coordinates (5-85% to keep away from edges)
        const candidateX = Math.random() * 40 + 5;
        const candidateY = Math.random() * 30 + 5;

        // Check distance against all already placed units
        const isOverlapping = units.some(u => {
          const dx = u.x - candidateX;
          const dy = u.y - candidateY;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });

        if (!isOverlapping) {
          units.push({
            id: id,
            x: candidateX,
            y: candidateY,
            rotation: Math.floor(Math.random() * 24) - 12,
            scoops: Array(scoopCount).fill(null)
          });
          placed = true;
        }
        attempts++;
      }

      // Fallback: if we can't find a spot, just increment days so we don't infinite loop
      daysAllocated += scoopCount;
      id++;
    }
    return units;
  }

  colorScoop(unit: IceCreamUnit, scoopIndex: number) {
    const moodColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#BE9FE1'];
    const randomMood = moodColors[Math.floor(Math.random() * moodColors.length)];

    this.iceCreams.update(all =>
      all.map(i => i.id === unit.id ? {
        ...i,
        scoops: i.scoops.map((s, idx) => idx === scoopIndex ? randomMood : s)
      } : i)
    );
  }
}