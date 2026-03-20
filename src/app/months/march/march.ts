import { Component, signal } from '@angular/core';
import { MoodPicker } from '../../mood-picker/mood-picker';

@Component({
  selector: 'app-march',
  imports: [MoodPicker],
  standalone: true,
  templateUrl: './march.html',
  styleUrls: ['./march.scss']
})
export class March {
  days = signal(Array.from({ length: 31 }, (_, i) => ({ id: i + 1, color: '#FFFFFF' })));
  private _selectedMood: string = '';

  readonly shardPaths = [
    "M50,100 L10,65 L50,55 Z", "M50,100 L50,55 L90,65 Z",
    "M0,70 L0,10 L90,15 Z", "M40,20 L50,55 L10,65 Z",
    "M40,20 L50,5 L60,20 Z", "M60,20 L50,55 L40,20 Z",
    "M90,65 L50,55 L60,20 Z", "M120,0 L90,65 L50,10 Z"
  ];

  updateDay(index: number) {
    if (this._selectedMood)
      this.days.update(current => {
        const updated = [...current];
        updated[index].color = this._selectedMood;
        return updated;
      });
  }

  getLeafTransform(leafIndex: number): string {
    const rotations = [0, 90, 180, 270];
    // Gap set to 0 so the tips touch exactly at the center
    const gap = 3;

    const offsets = [
      { x: 150, y: 80 - gap },
      { x: 220 + gap, y: 150 },
      { x: 150, y: 220 + gap },
      { x: 80 - gap, y: 150 }
    ];

    const pos = offsets[leafIndex];
    return `translate(${pos.x}, ${pos.y}) scale(1.3) rotate(${rotations[leafIndex]}, 50, 50)`;
  }

  getLabelPos(shardIndex: number) {
    // Approximate center points for the 8 shard triangles
    const centers = [
      { x: 40, y: 75 }, { x: 60, y: 75 },
      { x: 20, y: 45 }, { x: 35, y: 45 },
      { x: 50, y: 20 }, { x: 50, y: 40 },
      { x: 65, y: 45 }, { x: 80, y: 45 }
    ];
    return centers[shardIndex];
  }

  updateMood(color: string) {
    this._selectedMood = color;
  }
}