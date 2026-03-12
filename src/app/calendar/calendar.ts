import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, model, output } from '@angular/core';
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
  public selected = model<Date>(new Date());
  public calendarDays = computed(() => this._calculateWeekDates());
  public month = computed(() => this._getMonth());
  public days: string[] = DAYS;
  public currentDay: Date = new Date();
  public selectDate = output<Date>();

  public updateCurrentMonth(move: number): void {
    // this.selectDate.emit(new Date(this.selected().getFullYear(), this.selected().getMonth() + move, 1));
    this.selected.set(new Date(this.selected().getFullYear(), this.selected().getMonth() + move, 1))
    this._utilsService.getDaysInMonth(this.selected().getFullYear(), this.selected().getMonth() + move)
  }

  private _calculateWeekDates(): string[] {
    return this._utilsService.getDaysInMonth(this.selected().getFullYear(), this.selected().getMonth());
  }

  private _getMonth() {
    const date = this.selected();
    return this._utilsService.getMonth(date.getFullYear(), date.getMonth());
  }
}

