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
  days = signal(Array.from({ length: 30 }, (_, i) => ({ color: '#FFFFFF' })));

  // Decorative paths that aren't clickable days
  readonly decorations = [
    { d: "M200,160 L200,450", stroke: "#333", width: 6 }, // Stick
    { d: "M200,450 Q200,530 140,530", stroke: "#333", width: 6 } // Handle
  ];

  readonly shardConfigs = [
    // LAYER 1: TOP (Days 1-6)
    { path: "M200,60 L160,110 L200,120 Z", label: { x: 188, y: 95 } },
    { path: "M200,60 L200,120 L240,110 Z", label: { x: 212, y: 95 } },
    { path: "M200,60 L120,130 L160,110 Z", label: { x: 155, y: 95 } },
    { path: "M200,60 L240,110 L280,130 Z", label: { x: 245, y: 95 } },
    { path: "M200,60 L80,160 L120,130 Z", label: { x: 125, y: 110 } },
    { path: "M200,60 L280,130 L320,160 Z", label: { x: 275, y: 110 } },

    // LAYER 2: MIDDLE (Days 7-18)
    { path: "M160,110 L130,170 L180,180 L200,120 Z", label: { x: 165, y: 145 } },
    { path: "M200,120 L180,180 L220,180 L240,110 Z", label: { x: 200, y: 155 } },
    { path: "M240,110 L220,180 L270,170 L280,130 Z", label: { x: 245, y: 145 } },
    { path: "M120,130 L90,190 L130,170 L160,110 Z", label: { x: 125, y: 145 } },
    { path: "M280,130 L270,170 L310,190 L320,160 Z", label: { x: 285, y: 145 } },
    { path: "M80,160 L50,220 L90,190 L120,130 Z", label: { x: 85, y: 170 } },
    { path: "M320,160 L310,190 L350,220 L320,160 Z", label: { x: 315, y: 185 } },
    { path: "M90,190 L60,250 L110,250 L130,170 Z", label: { x: 95, y: 220 } },
    { path: "M130,170 L110,250 L160,260 L180,180 Z", label: { x: 145, y: 220 } },
    { path: "M180,180 L160,260 L200,270 L200,180 Z", label: { x: 185, y: 235 } },
    { path: "M200,180 L200,270 L240,260 L220,180 Z", label: { x: 215, y: 235 } },
    { path: "M220,180 L240,260 L290,250 L270,170 Z", label: { x: 255, y: 220 } },

    // LAYER 3: BOTTOM (Days 19-30)
    { path: "M270,170 L290,250 L340,250 L310,190 Z", label: { x: 305, y: 220 } },
    { path: "M60,250 L30,280 L80,280 L110,250 Z", label: { x: 70, y: 265 } },
    { path: "M340,250 L310,250 L320,280 L370,280 Z", label: { x: 335, y: 265 } },
    { path: "M110,250 L80,280 L140,290 L160,260 Z", label: { x: 120, y: 275 } },
    { path: "M160,260 L140,290 L200,300 L200,270 Z", label: { x: 175, y: 280 } },
    { path: "M200,270 L200,300 L260,290 L240,260 Z", label: { x: 225, y: 280 } },
    { path: "M240,260 L260,290 L320,280 L290,250 Z", label: { x: 280, y: 275 } },
    { path: "M140,290 L170,320 L200,325 L200,300 Z", label: { x: 180, y: 310 } },
    { path: "M200,300 L200,325 L230,320 L260,290 Z", label: { x: 220, y: 310 } },
    { path: "M80,280 L100,310 L140,290 Z", label: { x: 105, y: 295 } },
    { path: "M320,280 L260,290 L300,310 Z", label: { x: 295, y: 295 } },
    { path: "M200,325 L170,320 L200,350 L230,320 Z", label: { x: 200, y: 335 } }
  ];

  updateDay(index: number) {
    this.days.update(current => {
      const updated = [...current];
      updated[index].color = this.selectedMood();
      return updated;
    });
  }
}
