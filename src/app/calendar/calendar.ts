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
  public updateDate = output<string>();
  public readonly today = new Date();


  public updateCurrentMonth(move: number): void {
    const activeDate = new Date(this.selected.getFullYear(), this.selected.getMonth() + move, 1);
    if (activeDate.getTime() > Date.now()) return;

    this.selected = activeDate;
    this._utilsService.updateActiveDate(new Date(this.selected.getTime()));
  }

  public setToday() {
    const midnightToday = new Date();
    midnightToday.setHours(0, 0, 0, 0);
    const midnightSelected = new Date(this.selected.getTime());
    midnightSelected.setHours(0, 0, 0, 0);

    if (midnightToday.getTime() !== midnightSelected.getTime()) {
      this.selected = new Date();
      this._utilsService.updateActiveDate(new Date(this.selected.getTime()));
    }
  }

  public updateToday(day: string) {
    if (new Date(day).getTime() > Date.now()) return;

    this.updateDate.emit(day);
    this.selected = new Date(day.replace(/-/g, '/'));
    this._utilsService.updateActiveDate(this.selected);
  }
}

