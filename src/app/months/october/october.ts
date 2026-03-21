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
      // --- TOP LOBES (Days 1-7) ---
      { pts: "100,100 180,95 140,150", cx: 140, cy: 115 },
      { pts: "180,95 250,95 220,150", cx: 215, cy: 110 },
      { pts: "250,95 320,95 280,150", cx: 285, cy: 110 },
      { pts: "320,95 400,100 360,150", cx: 360, cy: 115 },
      { pts: "140,150 220,150 180,95", cx: 180, cy: 135 },
      { pts: "320,95 360,150 280,150", cx: 320, cy: 130 },
      { pts: "220,150 280,150 250,95", cx: 250, cy: 130 },

      // --- OUTER SIDES (Days 8-15) ---
      { pts: "100,100 40,200 140,150", cx: 93, cy: 150 },
      { pts: "400,100 460,200 360,150", cx: 407, cy: 150 },
      { pts: "40,200 70,300 140,240", cx: 83, cy: 246 },
      { pts: "460,200 430,300 360,240", cx: 417, cy: 246 },
      { pts: "70,300 100,380 150,340", cx: 106, cy: 340 },
      { pts: "430,300 400,380 350,340", cx: 393, cy: 340 },
      { pts: "140,150 40,200 140,240", cx: 106, cy: 196 },
      { pts: "360,150 460,200 360,240", cx: 393, cy: 196 },

      // --- AROUND THE FACE (Days 16-24) ---
      { pts: "140,150 250,150 210,210", cx: 200, cy: 170 },
      { pts: "360,150 250,150 290,210", cx: 300, cy: 170 },
      { pts: "140,240 250,240 150,340", cx: 180, cy: 273 },
      { pts: "360,240 250,240 350,340", cx: 320, cy: 273 },
      { pts: "140,150 140,240 255,240", cx: 150, cy: 175 },
      { pts: "360,150 360,240 250,240", cx: 345, cy: 185 },
      { pts: "250,150 210,210 250,240", cx: 236, cy: 200 },
      { pts: "250,150 290,210 250,240", cx: 263, cy: 200 },
      { pts: "140,240 70,300 150,340", cx: 120, cy: 293 },

      // --- BOTTOM CHIN (Days 25-31) ---
      { pts: "360,240 430,300 350,340", cx: 380, cy: 293 },
      { pts: "150,340 350,340 250,240", cx: 250, cy: 306 },
      { pts: "150,340 250,340 200,400", cx: 200, cy: 360 },
      { pts: "350,340 250,340 300,400", cx: 300, cy: 360 },
      { pts: "100,380 200,400 150,340", cx: 150, cy: 373 },
      { pts: "400,380 300,400 350,340", cx: 350, cy: 373 },
      { pts: "200,400 300,400 250,340", cx: 250, cy: 380 }
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