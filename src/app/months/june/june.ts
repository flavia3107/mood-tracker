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
    const padding = 2; // Space from the absolute edge to keep scoops visible
    const minDistance = 4;
    const maxAttempts = 500;

    for (let day = 1; day <= totalDays; day++) {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < maxAttempts) {
        let candidateX = 0;
        let candidateY = 0;
        let side: number;
        if (day <= 8) side = 0;
        else if (day <= 16) side = 1;
        else if (day <= 24) side = 2;
        else side = 3;

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

      if (!placed) console.warn(`Could not place cone for day ${day}`);
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