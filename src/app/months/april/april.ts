import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-april',
  imports: [],
  templateUrl: './april.html',
  styleUrl: './april.scss',
})
export class April {
  days = signal(Array.from({ length: 31 }, (_, i) => i + 1));
  aprilTulips = computed(() => {
    const days = this.days();

    return days.map((id) => {
      return {
        id,
        // Random organic variations
        rotation: (Math.random() - 0.5) * 15, // Natural tilt
        height: 180 + Math.random() * 100,    // Varied stem heights for depth
        tilt: (Math.random() - 0.5) * 10,     // Slight stem lean
        color: Math.random() > 0.5 ? '#fb7185' : '#f43f5e' // Varied pinks
      };
    });
  });
}
