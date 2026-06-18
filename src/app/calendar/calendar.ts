import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { DAYS } from '../../shared/constants/constants';
import { UtilsService } from '../../shared/services/utils';
import { MatIconModule } from '@angular/material/icon';
import { IsFuturePipe } from '../../shared/pipes/is-future-pipe';

@Component({
  selector: 'app-calendar',
  imports: [DatePipe, MatIconModule, NgClass, IsFuturePipe],
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
  public updateDate = output<string>()

  public updateCurrentMonth(move: number): void {
    const activeDate = new Date(this.selected.getFullYear(), this.selected.getMonth() + move, 1);
    if (activeDate.getTime() > Date.now()) return;

    this.selected = new Date(activeDate.getTime());
    this._utilsService.updateActiveDate(new Date(activeDate.getTime()));
  }

  public setToday() {
    this.currentDay.setHours(0, 0, 0, 0);
    this.selected.setHours(0, 0, 0, 0);
    if (this.currentDay.getTime() !== this.selected.getTime()) {
      this.selected = this.currentDay;
      this._utilsService.updateActiveDate(new Date());
    }
  }

  public updateToday(day: string) {
    const selected = new Date(day.replace(/-/g, '/'));
    const currentSelected = new Date(this.selected.getTime());
    selected.setHours(0, 0, 0, 0);
    currentSelected.setHours(0, 0, 0, 0);

    if (selected.getTime() === currentSelected.getTime()) return;

    this.updateDate.emit(day);
    this.selected = new Date(day.replace(/-/g, '/'));
    this._utilsService.updateActiveDate(this.selected);
  }
}

