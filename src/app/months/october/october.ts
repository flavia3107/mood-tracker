import { Component, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';
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
  private _utilService = inject(UtilsService);
  private _date = this._utilService.selectedDate();

  days: FacetDay[] = this._generateFacets();

  private _generateFacets() {
    const facetData = [
      // --- TOP ROUNDED LOBES (Days 1-7) ---
      { pts: "125,120 185,90 155,170", cx: 155, cy: 140 },
      { pts: "185,90 250,85 220,170", cx: 220, cy: 135 },
      { pts: "250,85 315,90 280,170", cx: 280, cy: 135 },
      { pts: "315,90 375,120 345,170", cx: 346, cy: 145 },
      { pts: "155,170 220,170 185,90", cx: 185, cy: 145 },
      { pts: "315,90 345,170 280,170", cx: 315, cy: 145 },
      { pts: "220,170 280,170 250,85", cx: 250, cy: 140 },

      // --- MID-SECTION CURVATURE - TIGHTER SIDES (Days 8-15) ---
      { pts: "125,120 70,200 155,170", cx: 125, cy: 165 },
      { pts: "375,120 430,200 345,170", cx: 375, cy: 165 },
      { pts: "70,200 75,315 155,250", cx: 105, cy: 255 },
      { pts: "430,200 425,315 345,250", cx: 395, cy: 255 },
      { pts: "75,310 120,400 165,350", cx: 125, cy: 360 },
      { pts: "425,310 380,400 335,350", cx: 370, cy: 360 },
      { pts: "155,170 70,200 155,250", cx: 125, cy: 210 },
      { pts: "345,170 430,200 345,250", cx: 380, cy: 210 },

      // --- CENTER CORE & FACE (Remains unchanged) ---
      { pts: "155,170 255,170 200,220", cx: 205, cy: 190 },
      { pts: "345,170 250,170 295,215", cx: 295, cy: 190 },
      { pts: "155,250 250,250 165,350", cx: 190, cy: 280 },
      { pts: "345,250 250,250 335,350", cx: 310, cy: 280 },
      { pts: "155,170 155,250 255,250", cx: 220, cy: 240 },
      { pts: "345,170 345,250 250,250", cx: 283, cy: 240 },
      { pts: "250,170 205,210 250,250", cx: 233, cy: 215 },
      { pts: "250,170 294,213 250,250", cx: 266, cy: 215 },
      { pts: "155,250 79,312 165,350", cx: 130, cy: 310 },

      // --- BOTTOM ROUNDED CHIN - TIGHTER CHIN (Days 25-31) ---
      { pts: "345,250 425,310 335,350", cx: 370, cy: 310 },
      { pts: "165,350 335,350 250,250", cx: 250, cy: 342 },
      { pts: "165,350 250,350 220,420", cx: 215, cy: 385 },
      { pts: "335,350 250,350 280,420", cx: 285, cy: 385 },
      { pts: "120,400 220,420 165,350", cx: 170, cy: 395 },
      { pts: "380,400 280,420 335,350", cx: 330, cy: 395 },
      { pts: "220,420 280,420 250,350", cx: 250, cy: 400 }
    ];

    const newVal = facetData.map((data, i) => ({
      id: i + 1,
      color: this._utilService.getMoodColorForDate(new Date(this._date.getFullYear(), 9, i + 1)),
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