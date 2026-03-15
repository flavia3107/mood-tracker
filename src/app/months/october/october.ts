import { DecimalPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface WebSegment {
  id: number;
  path: string;
  color: string;
  labelX: number;
  labelY: number;
}

@Component({
  selector: 'app-october',
  standalone: true,
  imports: [],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  segments: WebSegment[] = [];
  selectedColor = '#FF9100';
  moods = [
    { label: 'Amazing', color: '#FF9100' },
    { label: 'Good', color: '#FFD54F' },
    { label: 'Neutral', color: '#A1887F' },
    { label: 'Spooky', color: '#4A148C' }
  ];

  ngOnInit() {
    this.generateWeb();
  }

  generateWeb() {
    const totalDays = 31;
    const centerX = 200;
    const centerY = 200;
    const radius = 180;

    this.segments = Array.from({ length: totalDays }, (_, i) => {
      const angleStep = (2 * Math.PI) / totalDays;
      const startAngle = i * angleStep;
      const endAngle = (i + 1) * angleStep;

      // Calculate path for a "slice" of the web
      const x1 = centerX + radius * Math.cos(startAngle);
      const y1 = centerY + radius * Math.sin(startAngle);
      const x2 = centerX + radius * Math.cos(endAngle);
      const y2 = centerY + radius * Math.sin(endAngle);

      // Label position (slightly offset from center)
      const labelRadius = radius * 0.75;
      const lx = centerX + labelRadius * Math.cos(startAngle + angleStep / 2);
      const ly = centerY + labelRadius * Math.sin(startAngle + angleStep / 2);

      return {
        id: i + 1,
        path: `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`,
        color: 'rgba(255, 255, 255, 0.05)',
        labelX: lx,
        labelY: ly
      };
    });
  }

  updateDay(index: number) {
    this.segments[index].color = this.selectedColor;
  }
}