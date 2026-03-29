import { Component, signal } from "@angular/core";

interface IceCreamUnit {
  id: number;
  x: number;
  y: number;
  day: number;
  color: string | null;
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
    const units: IceCreamUnit[] = [];
    const cols = 6;
    const rows = 5;
    const containerWidth = 50;
    const containerHeight = 45;
    const spacingX = 5.5;
    const spacingY = 7.5;
    const startX = (containerWidth - (cols - 1) * spacingX) / 2;
    const startY = (containerHeight - (rows - 1) * spacingY) / 2;

    let day = 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = startX + (c * spacingX);
        const y = startY + (r * spacingY);
        const tilt = Math.random() > 0.5 ? 12 : -12;
        units.push({
          id: day,
          x: x,
          y: y,
          day: day,
          color: null,
          rotation: tilt
        });
        day++;
      }
    }
    return units
  }

  colorScoop(unit: IceCreamUnit,) {
    unit.color = 'red'
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