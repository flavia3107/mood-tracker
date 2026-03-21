import { Component } from '@angular/core';
import { MoodPicker } from '../../mood-picker/mood-picker';

interface FacetDay {
  id: number;
  color: string;
  points: string;
  centerX: number;
  centerY: number;
}

@Component({
  selector: 'app-october',
  standalone: true,
  imports: [MoodPicker],
  templateUrl: './october.html',
  styleUrl: './october.scss'
})
export class October {
  private _selectedColor: string = '';
  days: FacetDay[] = this._generateFacets();

  private _generateFacets() {
    const facetData = [
      // --- TOP ROUNDED LOBES (Days 1-7) ---
      { pts: "125,120 185,90 155,170", cx: 155, cy: 125 }, // (e.g., 110x -> 125x)
      { pts: "185,90 250,85 220,170", cx: 215, cy: 115 },
      { pts: "250,85 315,90 280,170", cx: 285, cy: 115 }, // (e.g., 320x -> 315x)
      { pts: "315,90 375,120 345,170", cx: 345, cy: 125 }, // (e.g., 390x -> 375x)
      { pts: "155,170 220,170 185,90", cx: 185, cy: 145 },
      { pts: "315,90 345,170 280,170", cx: 315, cy: 145 },
      { pts: "220,170 280,170 250,85", cx: 250, cy: 140 },

      // --- MID-SECTION CURVATURE - TIGHTER SIDES (Days 8-15) ---
      { pts: "125,120 70,200 155,170", cx: 115, cy: 165 }, // Left side pulled in
      { pts: "375,120 430,200 345,170", cx: 385, cy: 165 }, // Right side pulled in
      { pts: "70,200 85,310 155,250", cx: 105, cy: 255 },
      { pts: "430,200 415,310 345,250", cx: 395, cy: 255 },
      { pts: "85,310 120,400 165,350", cx: 130, cy: 355 },
      { pts: "415,310 380,400 335,350", cx: 370, cy: 355 },
      { pts: "155,170 70,200 155,250", cx: 120, cy: 205 },
      { pts: "345,170 430,200 345,250", cx: 380, cy: 205 },

      // --- CENTER CORE & FACE (Remains unchanged) ---
      { pts: "155,170 250,170 210,210", cx: 205, cy: 185 },
      { pts: "345,170 250,170 290,210", cx: 295, cy: 185 },
      { pts: "155,250 250,250 165,350", cx: 190, cy: 290 },
      { pts: "345,250 250,250 335,350", cx: 310, cy: 290 },
      { pts: "155,170 155,250 255,250", cx: 170, cy: 205 },
      { pts: "345,170 345,250 250,250", cx: 330, cy: 205 },
      { pts: "250,170 210,210 250,250", cx: 236, cy: 215 },
      { pts: "250,170 290,210 250,250", cx: 263, cy: 215 },
      { pts: "155,250 85,310 165,350", cx: 135, cy: 305 },

      // --- BOTTOM ROUNDED CHIN - TIGHTER CHIN (Days 25-31) ---
      { pts: "345,250 415,310 335,350", cx: 365, cy: 305 },
      { pts: "165,350 335,350 250,250", cx: 250, cy: 325 },
      { pts: "165,350 250,350 220,420", cx: 220, cy: 395 },
      { pts: "335,350 250,350 280,420", cx: 280, cy: 395 },
      { pts: "120,400 220,420 165,350", cx: 170, cy: 405 },
      { pts: "380,400 280,420 335,350", cx: 330, cy: 405 },
      { pts: "220,420 280,420 250,350", cx: 250, cy: 415 }
    ];

    const newVal = facetData.map((data, i) => ({
      id: i + 1,
      color: '#ffffff',
      points: data.pts,
      centerX: data.cx,
      centerY: data.cy
    }));
    return newVal;
  }

  updateDayMood(day: FacetDay) {
    if (this._selectedColor)
      day.color = this._selectedColor;
  }

  updateMood(color: string) {
    this._selectedColor = color;
  }
}