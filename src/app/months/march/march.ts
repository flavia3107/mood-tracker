import { KeyValuePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface CloudDay {
  id: number;
  x: number;
  y: number;
  scale: number;
  moodColor: string;
}

@Component({
  selector: 'app-march',
  templateUrl: './march.html',
  styleUrl: './march.scss',
  standalone: true
})
export class March {
  // days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#f8fafc' })));
  readonly moods = [
    { label: 'happy', color: '#D4E157' },
    { label: 'neutral', color: '#9CCC65' },
    { label: 'stressed', color: '#689F38' },
    { label: 'tired', color: '#455A64' },
    { label: 'moody', color: '#2E7D32' },
    { label: 'sad', color: '#546E7A' }
  ];

  selectedMood = signal<string>(this.moods[0].color);

  // We'll map the 31 days to specific path data strings
  // I have pre-calculated these to form the geometric heart leaves
  days = signal(this.generateCloverPaths());

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

  private generateCloverPaths() {
    // This creates 31 unique shard paths that form the 4 leaves
    const paths = [
      // TOP LEAF (8 shards)
      "M200,200 L160,140 L200,80 Z", "M200,80 L160,140 L120,130 Z",
      "M200,80 L120,130 L130,70 Z", "M130,70 L120,130 L80,100 Z",
      "M200,80 L240,140 L280,130 Z", "M200,80 L280,130 L270,70 Z",
      "M270,70 L280,130 L320,100 Z", "M200,80 L270,70 L200,40 Z",

      // RIGHT LEAF (8 shards)
      "M200,200 L260,160 L320,200 Z", "M320,200 L260,160 L270,120 Z",
      "M320,200 L270,120 L330,130 Z", "M330,130 L270,120 L360,80 Z",
      "M320,200 L260,240 L270,280 Z", "M320,200 L270,280 L330,270 Z",
      "M330,270 L270,280 L360,320 Z", "M320,200 L330,270 L360,200 Z",

      // BOTTOM LEAF (8 shards)
      "M200,200 L240,260 L200,320 Z", "M200,320 L240,260 L280,270 Z",
      "M200,320 L280,270 L270,330 Z", "M270,330 L280,270 L320,300 Z",
      "M200,320 L160,260 L120,270 Z", "M200,320 L120,270 L130,330 Z",
      "M130,330 L120,270 L80,300 Z", "M200,320 L130,330 L200,360 Z",

      // LEFT LEAF (7 shards for 31 total)
      "M200,200 L140,240 L80,200 Z", "M80,200 L140,240 L130,280 Z",
      "M80,200 L130,280 L70,270 Z", "M70,270 L130,280 L40,320 Z",
      "M80,200 L140,160 L130,120 Z", "M80,200 L130,120 L70,130 Z",
      "M70,130 L130,120 L40,80 Z"
    ];

    return paths.map((d, i) => ({ id: i + 1, d, color: '#FFFFFF' }));
  }
}