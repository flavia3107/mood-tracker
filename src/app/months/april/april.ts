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
    const focalPointX = 400; // The bottom center of the bouquet
    const focalPointY = 650;
    const days = this.days();

    // Distribute the 30 days into three layered tiers
    const layerCount = 3;
    const daysPerLayer = Math.ceil(days.length / layerCount);

    return days.map((id, index) => {
      // 1. Determine which "tier" this tulip sits in
      const layer = Math.floor(index / daysPerLayer); // 0, 1, or 2

      // 2. Base Arc Geometry (We fan out less, only 120 degrees)
      const angleRange = 120;
      const positionInLayer = index % daysPerLayer;
      const angleStep = angleRange / (daysPerLayer - 1);
      const angleDeg = -60 + (positionInLayer * angleStep);
      const angleRad = (angleDeg * Math.PI) / 180;

      // 3. Multi-Tiered Stagger (Creates Volume, not a line)
      // Front layers are shorter, back layers are taller
      const baseLength = 220;
      const layerLengthStagger = 65;
      const jitter = (Math.random() - 0.5) * 40; // High random variation

      const stemLength = baseLength + (layer * layerLengthStagger) + jitter;

      // 4. Set the positions
      // Tulip head position
      const x = focalPointX + Math.sin(angleRad) * stemLength;
      const y = focalPointY - Math.cos(angleRad) * stemLength;

      return {
        id,
        x: x - 50, // Correcting for 100x100 symbol anchor
        y: y - 50,

        // key fix: Rotation is always generally UP (-10 to 10 degrees), not fanned out.
        rotation: (Math.random() - 0.5) * 20,

        scale: 1.2 + Math.random() * 0.2,

        // Data for the stem to match the staggered head
        stemX: focalPointX,
        stemY: focalPointY,
        stemRotation: angleDeg,
        stemLengthMultiplier: stemLength / 100 // Scale the 100px base stem path
      };
    });
  });
}
