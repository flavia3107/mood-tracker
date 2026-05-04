import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DAYS } from '../../shared/constants/constants';
import { UtilsService } from '../../shared/services/utils';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-calendar',
  imports: [DatePipe, MatIconModule, NgClass],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calendar {
  private _utilsService = inject(UtilsService);
  public selected: Date = new Date();
  public calendarDays = this._utilsService.calendarDays;
  public days: string[] = DAYS;
  public currentDay: Date = new Date();

  public updateCurrentMonth(move: number): void {
    this.selected = new Date(this.selected.getFullYear(), this.selected.getMonth() + move, 1);
    this._utilsService.updateActiveDate(this.selected);
  }

  public setToday() {
    this.currentDay.setHours(0, 0, 0, 0);
    this.selected.setHours(0, 0, 0, 0);
    if (this.currentDay.getTime() !== this.selected.getTime()) {
      this.selected = this.currentDay;
      this._utilsService.updateActiveDate(new Date());
    }
  }
}

