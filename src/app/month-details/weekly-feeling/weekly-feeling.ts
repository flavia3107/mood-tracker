import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MONTH_DAYS_CONFIG } from '../../../shared/constants/config';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-weekly-feeling',
  imports: [DatePipe],
  templateUrl: './weekly-feeling.html',
  styleUrl: './weekly-feeling.scss',
})
export class WeeklyFeeling {
  private _utilService = inject(UtilsService);
  public activeMonth = this._utilService.activeMonth;
  readonly monthConfig = MONTH_DAYS_CONFIG;

  weekDays = [
    { day: '2026-08-14', mood: 'happy' },
    { day: '2026-08-15', mood: 'neutral' },
    { day: '2026-08-16', mood: 'tired' },
    { day: '2026-08-17', mood: 'sad' },
    { day: '2026-08-18', mood: 'stressed' },
    { day: '2026-08-19', mood: 'happy' },
    { day: '2026-08-20', mood: 'moody' },
    { day: '2026-08-21', mood: 'happy' }
  ]
}
