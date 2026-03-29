import { Component, signal } from "@angular/core";

interface IceCreamUnit {
  id: number;
  x: number;
  y: number;
  day: number;     // Moved out of array
  color: string | null; // Moved out of array
  rotation: number;
}

@Component({
  selector: 'app-june',
  standalone: true,
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  iceCreams = signal<IceCreamUnit[]>(this.generateJuneCones());

  private generateJuneCones(): IceCreamUnit[] {
    const totalDays = 30;
    const units: IceCreamUnit[] = []; // Typed correctly now
    const minDistance = 8;
    const maxAttempts = 100;

    for (let day = 1; day <= totalDays; day++) {
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
            id: day,
            x: candidateX,
            y: candidateY,
            day: day,       // 1:1 Day mapping
            color: null,    // Default flavor
            rotation: Math.floor(Math.random() * 24) - 12,
          });
          placed = true;
        }
        attempts++;
      }
    }
    return units;
  }

  colorScoop(unit: IceCreamUnit,) {
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