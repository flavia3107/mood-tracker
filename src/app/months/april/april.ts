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
    // LEFT FACETS
    { path: "M200,60 L130,90 L60,150 Z", label: { x: 135, y: 105 } }, // 1
    { path: "M35,135 L135,85 L110,180 Z", label: { x: 100, y: 140 } }, // 2
    { path: "M55,145 L110,180 L30,225 Z", label: { x: 70, y: 185 } },  // 3
    { path: "M35,220 L110,180 L80,240 Z", label: { x: 75, y: 215 } },  // 4
    { path: "M30,217 L80,240 L25,285 Z", label: { x: 50, y: 250 } },  // 5
    { path: "M30,280 L80,240 L100,280 Z", label: { x: 70, y: 270 } }, // 6

    // LEFT-CENTER FACETS
    { path: "M200,60 L160,140 L130,90 Z", label: { x: 165, y: 95 } },  // 7
    { path: "M130,90 L160,140 L110,180 Z", label: { x: 135, y: 140 } }, // 8
    { path: "M110,180 L160,140 L140,220 Z", label: { x: 135, y: 185 } }, // 9
    { path: "M110,180 L140,220 L100,280 Z", label: { x: 120, y: 240 } }, // 10
    { path: "M100,280 L140,220 L150,290 Z", label: { x: 130, y: 270 } }, // 11

    // CENTER FACETS
    { path: "M200,60 L200,160 L160,140 Z", label: { x: 185, y: 125 } }, // 12
    { path: "M160,140 L200,160 L170,230 Z", label: { x: 175, y: 180 } }, // 13
    { path: "M170,230 L200,160 L230,230 Z", label: { x: 200, y: 200 } }, // 14
    { path: "M170,230 L230,230 L200,320 Z", label: { x: 200, y: 265 } }, // 15
    { path: "M170,230 L200,320 L150,290 Z", label: { x: 175, y: 285 } }, // 16

    // RIGHT-CENTER FACETS
    { path: "M200,60 L240,140 L200,160 Z", label: { x: 215, y: 125 } }, // 17
    { path: "M240,140 L290,180 L230,230 Z", label: { x: 255, y: 180 } }, // 18
    { path: "M230,230 L290,180 L270,260 Z", label: { x: 260, y: 230 } }, // 19
    { path: "M230,230 L270,260 L200,320 Z", label: { x: 235, y: 280 } }, // 20
    { path: "M200,320 L270,260 L250,300 Z", label: { x: 240, y: 300 } }, // 21

    // RIGHT FACETS
    { path: "M200,60 L270,90 L240,140 Z", label: { x: 235, y: 95 } },   // 22
    { path: "M280,80 L360,160 L290,185 Z", label: { x: 300, y: 140 } }, // 23
    { path: "M340,150 L290,180 L365,220 Z", label: { x: 330, y: 185 } }, // 24
    { path: "M365,220 L290,180 L320,240 Z", label: { x: 325, y: 215 } }, // 25
    { path: "M365,220 L320,240 L370,280 Z", label: { x: 350, y: 250 } }, // 26
    { path: "M370,280 L320,240 L300,280 Z", label: { x: 330, y: 270 } }, // 27
    { path: "M300,280 L320,240 L270,260 Z", label: { x: 300, y: 260 } }, // 28
    { path: "M300,280 L270,260 L250,300 Z", label: { x: 275, y: 285 } }, // 29
    { path: "M250,300 L200,320 L300,280 Z", label: { x: 250, y: 310 } }  // 30
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
