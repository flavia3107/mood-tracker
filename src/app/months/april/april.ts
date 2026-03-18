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

  readonly shardConfigs = [
    // LEFT SECTION (1-6)
    { path: "M200,60 L130,90 L60,150 Z", label: { x: 135, y: 105 } }, // 1
    { path: "M60,150 L130,90 L110,180 Z", label: { x: 100, y: 140 } }, // 2
    { path: "M60,150 L110,180 L25,240 Z", label: { x: 70, y: 185 } },  // 3
    { path: "M25,240 L110,180 L80,250 Z", label: { x: 75, y: 220 } },  // 4
    { path: "M25,240 L80,250 L25,310 Z", label: { x: 45, y: 265 } },  // 5
    { path: "M25,310 L80,250 L110,180 L125,310 Z", label: { x: 85, y: 285 } }, // 6 (Absorbed the gap between 4 & 10)

    // LEFT-CENTER (7-11)
    { path: "M200,60 L165,145 L130,90 Z", label: { x: 165, y: 95 } },   // 7
    { path: "M130,90 L165,145 L110,180 Z", label: { x: 135, y: 140 } }, // 8
    { path: "M110,180 L165,145 L145,230 Z", label: { x: 140, y: 185 } }, // 9
    { path: "M110,180 L145,230 L125,310 Z", label: { x: 125, y: 250 } }, // 10
    { path: "M125,310 L145,230 L165,260 Z", label: { x: 145, y: 275 } }, // 11

    // CENTER (12-16)
    { path: "M200,60 L200,165 L165,145 Z", label: { x: 188, y: 125 } },  // 12
    { path: "M165,145 L200,165 L165,260 Z", label: { x: 177, y: 190 } }, // 13
    { path: "M165,260 L200,165 L235,260 Z", label: { x: 200, y: 215 } }, // 14
    { path: "M165,260 L235,260 L200,310 Z", label: { x: 200, y: 280 } }, // 15
    { path: "M165,260 L200,310 L125,310 Z", label: { x: 165, y: 295 } }, // 16

    // RIGHT-CENTER (17-21)
    { path: "M200,60 L235,145 L200,165 Z", label: { x: 212, y: 125 } },  // 17
    { path: "M235,145 L290,180 L235,260 Z", label: { x: 255, y: 190 } }, // 18 (Absorbed gap above 18)
    { path: "M235,260 L290,180 L275,260 Z", label: { x: 265, y: 235 } }, // 19
    { path: "M235,260 L275,260 L200,310 Z", label: { x: 235, y: 290 } }, // 20
    { path: "M200,310 L275,260 L275,310 Z", label: { x: 250, y: 300 } }, // 21

    // RIGHT SECTION (22-30)
    { path: "M200,60 L270,90 L235,145 Z", label: { x: 235, y: 95 } },    // 22
    { path: "M270,90 L340,150 L290,180 Z", label: { x: 300, y: 135 } },  // 23 (Absorbed gap between 22/23)
    { path: "M340,150 L375,240 L290,180 Z", label: { x: 335, y: 185 } }, // 24
    { path: "M290,180 L375,240 L320,250 Z", label: { x: 325, y: 220 } }, // 25 (Absorbed gap between 24/25)
    { path: "M375,240 L375,310 L320,250 Z", label: { x: 355, y: 270 } }, // 26
    { path: "M375,310 L300,280 L320,250 Z", label: { x: 330, y: 290 } }, // 27
    { path: "M320,250 L300,280 L275,260 Z", label: { x: 300, y: 265 } }, // 28
    { path: "M300,280 L275,310 L275,260 Z", label: { x: 285, y: 285 } }, // 29
    { path: "M275,310 L375,310 L300,280 Z", label: { x: 315, y: 300 } }  // 30
  ];

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
