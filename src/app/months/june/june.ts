import { Component, signal } from '@angular/core';

interface IceCreamUnit {
  id: number,
  x: number;
  y: number;
  scoops: { day: number, color: string }[];
  rotation: number,
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
    let currentDay = 1; // Start at day 1
    const units: any[] = [];
    let id = 1;

    const minDistance = 8;
    const maxAttempts = 50;

    while (currentDay <= totalDays) {
      const remaining = (totalDays - currentDay) + 1;
      const scoopCount = Math.min(Math.floor(Math.random() * 3) + 1, remaining);

      // Create the scoops as objects: 1 scoop = 1 day
      const scoopObjects = [];
      for (let i = 0; i < scoopCount; i++) {
        scoopObjects.push({
          day: currentDay + i, // The 1:1 day number
          color: null          // The flavor/color
        });
      }

      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        const candidateX = Math.random() * 40 + 5;
        const candidateY = Math.random() * 30 + 5;

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
            scoops: scoopObjects // Now an array of { day, color }
          });
          placed = true;
        }
        attempts++;
      }

      // Increment currentDay by the number of scoops we just created
      currentDay += scoopCount;
      id++;
    }
    return units;
  }

  colorScoop(unit: IceCreamUnit, scoopIndex: number) {
    // const moodColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#BE9FE1'];
    // const randomMood = moodColors[Math.floor(Math.random() * moodColors.length)];

    // this.iceCreams.update(all =>
    //   all.map(i => i.id === unit.id ? {
    //     ...i,
    //     scoops: i.scoops.map((s, idx) => idx === scoopIndex ? randomMood : s)
    //   } : i)
    // );
  }
}