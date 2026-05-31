import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-weekly-feeling',
  imports: [DatePipe],
  templateUrl: './weekly-feeling.html',
  styleUrl: './weekly-feeling.scss',
})
export class WeeklyFeeling {
  private _utilService = inject(UtilsService);
  readonly monthConfig = this._utilService.monthConfig;
  public weekDays = computed(() => this._getWeekDays());

  private _getWeekDays() {
    const month = this.monthConfig();
    const weekDates = this._utilService.getWeekDays();

    return this.monthConfig()
      .filter(item => weekDates.filter(d => d.getDate() === (item.day ?? item.id)).length > 0)
      .map(item => ({ ...item, date: weekDates.filter(d => d.getDate() === (item.day ?? item.id))[0] }));
  }
}
