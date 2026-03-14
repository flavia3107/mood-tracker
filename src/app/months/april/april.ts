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
    const centerX = 400; // Middle of the 50rem container
    const centerY = 680; // The base of the bouquet (the "knot")
    const days = this.days();

    return days.map((id: any, index: number) => {
      // 1. Calculate an angle to fan them out (from -70 to +70 degrees)
      const angleRange = 140;
      const angleStep = angleRange / (days.length - 1);
      const angleDeg = -70 + (index * angleStep);
      const angleRad = (angleDeg * Math.PI) / 180;

      // 2. Vary the "stem length" so they aren't in a perfect flat line
      // This creates the lush, rounded bouquet look
      const length = 350 + (index % 3) * 40 + (Math.random() * 30);

      // 3. Trigonometry to find the tulip head position
      const x = centerX + Math.sin(angleRad) * length;
      const y = centerY - Math.cos(angleRad) * length;

      return {
        id,
        x,
        y,
        // The tulip should rotate to "look" away from the center
        rotation: angleDeg,
        scale: 1.2 + Math.random() * 0.2,
        delay: index * 0.05 // Useful for stagger animations
      };
    });
  });
}
