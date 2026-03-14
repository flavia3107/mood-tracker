import { Component, signal } from '@angular/core';
interface IceCreamUnit {
  x: number;
  y: number;
  scoops: (string | null)[];
}
@Component({
  selector: 'app-june',
  imports: [],
  templateUrl: './june.html',
  styleUrl: './june.scss',
})
export class June {
  iceCreams = signal<IceCreamUnit[]>([
    { x: 5, y: 30, scoops: Array(3).fill(null) },  // 3 scoops
    { x: 15, y: 25, scoops: Array(5).fill(null) },  // 5 scoops
    { x: 25, y: 32, scoops: Array(2).fill(null) },  // 2 scoops
    { x: 35, y: 20, scoops: Array(7).fill(null) },  // 7 scoops
    { x: 42, y: 28, scoops: Array(4).fill(null) }   // 4 scoops
  ]);

  colorScoop(unit: IceCreamUnit, scoopIndex: number) {
    const moodColors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#BE9FE1'];
    const randomMood = moodColors[Math.floor(Math.random() * moodColors.length)];

    this.iceCreams.update(all => {
      return all.map(i => {
        if (i === unit) {
          const newScoops = [...i.scoops];
          newScoops[scoopIndex] = randomMood;
          return { ...i, scoops: newScoops };
        }
        return i;
      });
    });
  }
}
