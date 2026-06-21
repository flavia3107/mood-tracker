import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions, CHART_OPTIONS } from '../../../shared/constants/chart-models';
import { MONTHLY_MOOD_CONFIG, Mood, MOOD_MESSAGES } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-weekly-feeling',
  imports: [DatePipe, NgApexchartsModule, MatTooltipModule],
  templateUrl: './weekly-feeling.html',
  styleUrl: './weekly-feeling.scss',
  providers: [DatePipe]
})
export class WeeklyFeeling {
  private _datePipe = inject(DatePipe);
  private _utilService = inject(UtilsService);
  private _weekDates = this._utilService.currentWeek;
  public weekDays = computed(() => this._getWeekDays());
  public chartOptions = computed(() => this._getChartConfig());
  readonly monthConfig = this._utilService.monthConfig;

  private _getWeekDays() {
    const weekDates = this._weekDates();
    const currentMonthConfig = this.monthConfig();

    const weekConfig = weekDates.map(date => {
      const matchingConfig = currentMonthConfig.find(item => {
        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === date.getFullYear() &&
          itemDate.getMonth() === date.getMonth() &&
          itemDate.getDate() === date.getDate();
      });
      return matchingConfig ? { ...matchingConfig, date } : this._configEmptyDate(date);
    });
    const avg: number = weekConfig.reduce((sum, day) => sum + day.value, 0) / 7;
    const monthConfig: { [key: string]: any } = {
      startDate: weekDates[0].toDateString(),
      endDate: weekDates[6].toDateString(),
      weekConfig,
      isSameMonth: this._datePipe.transform(weekDates[0], 'MMM') === this._datePipe.transform(weekDates[6], 'MMM'),
      avg: +((avg * 10) / 6).toFixed(2)
    };
    return monthConfig;
  }

  private _getChartConfig() {
    const color = MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()][2].color;
    const config = this.weekDays()['weekConfig'];
    const mappedData = config.map((day: any) => ({
      x: new Date(day.date).getTime(),
      y: day.value
    })).sort((a: any, b: any) => a.x - b.x);

    const chartConfig: Partial<ChartOptions> = {
      ...CHART_OPTIONS,
      series: [
        { name: 'Mood', data: mappedData }
      ],
      colors: [color],
      labels: mappedData.map((d: any) => new Date(d.x).toDateString()),
    };

    return chartConfig;
  }

  private _configEmptyDate(date: Date) {
    const { color, label } = this._utilService.getMoodColorForDate(date);
    return {
      tooltip: MOOD_MESSAGES[label as Mood]?.label ?? '',
      value: MOOD_MESSAGES[label as Mood]?.value ?? 0,
      color,
      label,
      date
    }
  }
}
