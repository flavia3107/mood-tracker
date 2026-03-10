import { Component } from '@angular/core';
interface Point { x: number; y: number; }
@Component({
  selector: 'app-january',
  imports: [],
  templateUrl: './january.html',
  styleUrl: './january.scss',
})
export class January {
  monthData: string[] = Array(31).fill('none');
  // We define the "tip" height and "width" for 30 shards
  // arranged in a fan-like cluster.
  shards = Array.from({ length: 30 }, (_, i) => ({
    angle: (i * 180) / 29 - 90, // Fan out from -90 to 90 degrees
    length: 60 + Math.random() * 40, // Random heights for a natural look
    width: 8 + Math.random() * 6
  }));

  getShardPath(length: number, width: number): string {
    // Creates a sharp, 4-point diamond/shard shape
    // Starts at 0,0 (base) -> width/2, -length/2 (mid) -> 0,-length (tip) -> -width/2, -length/2 (mid)
    return `M 0 0 L ${width / 2} ${-length / 2} L 0 ${-length} L ${-width / 2} ${-length / 2} Z`;
  }

  getMoodColor(idx: number): string {
    const palette: Record<string, string> = {
      'great': '#00B4D8', // Deep Crystal Blue
      'good': '#90E0EF',  // Light Blue
      'meh': '#CAF0F8',   // Faint Frost
      'bad': '#94A3B8',   // Frozen Slush
      'none': 'rgba(255, 255, 255, 0.2)'
    };
    return palette[this.monthData[idx]] || palette['none'];
  }

}
