import { Component, computed, signal } from '@angular/core';
interface ChestnutDay {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  mood?: string
}
@Component({
  selector: 'app-november',
  imports: [],
  templateUrl: './november.html',
  styleUrl: './november.scss',
})
export class November {
  days = signal(Array.from({ length: 31 }, (_, i) => i + 1));

  octoberChestnuts = computed(() => {
    const containerWidth = 800; // 50rem
    const days = this.days();
    const columns = 7;
    const startX = 30;         // Padding from left edge
    const startY = 80;         // Padding from top edge
    const horizontalGap = 100; // Adjusted to stay within 800px
    const verticalGap = 100;

    return days.map((id, index) => {
      const col = index % columns;
      const row = Math.floor(index / columns);

      return {
        id,
        x: startX + (col * horizontalGap),
        y: startY + (row * verticalGap),
        rotation: (Math.random() - 0.5) * 50,
        scale: 1.2, // Slightly smaller scale helps prevent edge bleeding
        mood: ((Math.random() - 0.5) * 50) % 5 == 0 ? 'happy' : 'sad'
      };
    });
  });

  public getChestnutMood(id: number) {
    return 'smile'
  }
}
