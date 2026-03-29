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
    const units: IceCreamUnit[] = [];

    const width = 50;  // Box width in rem
    const height = 45; // Box height in rem
    const padding = 1; // Keep cones slightly away from the absolute edge

    const minDistance = 6; // Reduced slightly to ensure 30 fit on the perimeter
    const maxAttempts = 100;

    for (let day = 1; day <= totalDays; day++) {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        let candidateX = 0;
        let candidateY = 0;

        // 1. Randomly choose a side: 0=Top, 1=Bottom, 2=Left, 3=Right
        const side = Math.floor(Math.random() * 4);

        if (side === 0) { // Top
          candidateX = Math.random() * (width - padding * 2) + padding;
          candidateY = padding;
        } else if (side === 1) { // Bottom
          candidateX = Math.random() * (width - padding * 2) + padding;
          candidateY = height - padding;
        } else if (side === 2) { // Left
          candidateX = padding;
          candidateY = Math.random() * (height - padding * 2) + padding;
        } else { // Right
          candidateX = width - padding;
          candidateY = Math.random() * (height - padding * 2) + padding;
        }

        // 2. Overlap check
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
            day: day,
            color: null,
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