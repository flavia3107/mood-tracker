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
    const units: any[] = [];

    const minDistance = 8;
    const maxAttempts = 100; // Increased attempts since we have more individual cones to place

    for (let day = 1; day <= totalDays; day++) {
      let placed = false;
      let attempts = 0;

      // Create the single scoop object for this specific day
      const singleScoop = [{
        day: day,
        color: null
      }];

      while (!placed && attempts < maxAttempts) {
        // Coordinates (5-45% for X, 5-35% for Y based on your original scale)
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
            id: day, // Using the day as the ID
            x: candidateX,
            y: candidateY,
            rotation: Math.floor(Math.random() * 24) - 12,
            scoops: singleScoop
          });
          placed = true;
        }
        attempts++;
      }

      // Optional: Log if a cone couldn't be placed due to space
      if (!placed) {
        console.warn(`Could not find a spot for Day ${day}`);
      }
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