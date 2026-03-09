import { DatePipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, model, output } from '@angular/core';
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
  selected = model<Date | null>(null);
  public calendarDays = computed(() => this._calculateWeekDates());
  public days: string[] = DAYS;
  public currentDay: Date = new Date();
  public activeDate = input<Date>(new Date());
  public selectDate = output<Date>();

  public updateCurrentMonth(move: number): void {
    this.selectDate.emit(new Date(this.activeDate().getFullYear(), this.activeDate().getMonth() + move, 1));
  }

  public emitSelection(newDate: string): void {
    this.selectDate.emit(new Date(`${newDate}T12:00:00Z`));
  }

  private _calculateWeekDates(): string[] {
    return this._utilsService.getDaysInMonth(this.activeDate().getFullYear(), this.activeDate().getMonth());
  }
}

