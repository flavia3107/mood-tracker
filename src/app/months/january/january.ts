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
  // 5 Clusters to hold 30 days (6 per cluster)
  // 5 clusters with coordinates and distinct heights
  clusters = [
    { x: 55, y: 170, scale: 0.7, start: 0, rotation: -15 },
    { x: 95, y: 160, scale: 1.2, start: 6, rotation: 0 },
    { x: 135, y: 175, scale: 0.8, start: 12, rotation: 10 },
    { x: 170, y: 165, scale: 0.9, start: 18, rotation: 20 },
    { x: 105, y: 185, scale: 0.6, start: 24, rotation: -5 }
  ];

  getMoodColor(idx: number, shade: 'base' | 'light' | 'dark' | 'peak'): string {
    const mood = this.monthData[idx];
    const themes: any = {
      'great': { base: '#74CCF4', light: '#B9E9FF', dark: '#52A8D1', peak: '#D9F3FF' },
      'good': { base: '#A3D9F7', light: '#D6F0FF', dark: '#82B9D6', peak: '#EAF8FF' },
      'meh': { base: '#C5E4F3', light: '#E8F6FD', dark: '#A4C6D8', peak: '#F4FAFE' },
      'none': { base: '#E2E8F0', light: '#F1F5F9', dark: '#CBD5E1', peak: '#FFFFFF' }
    };
    return (themes[mood] || themes['none'])[shade];
  }
}
