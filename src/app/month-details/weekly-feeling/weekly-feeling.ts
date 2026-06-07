import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions, CHART_OPTIONS } from '../../../shared/constants/chart-models';
import { MONTHLY_MOOD_CONFIG } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';

@Component({
  selector: 'app-weekly-feeling',
  imports: [DatePipe, NgApexchartsModule],
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
        if (!item.date) return (item.day ?? item.id) === date.getDate();

        const itemDate = new Date(item.date);
        return itemDate.getFullYear() === date.getFullYear() &&
          itemDate.getMonth() === date.getMonth() &&
          itemDate.getDate() === date.getDate();
      });

      return matchingConfig ? { ...matchingConfig, date } : { id: null, color: '#fff', date };
    });

    const monthConfig: { [key: string]: any } = {
      startDate: weekDates[0].toDateString(),
      endDate: weekDates[6].toDateString(),
      weekConfig,
      isSameMonth: this._datePipe.transform(weekDates[0], 'MMM') === this._datePipe.transform(weekDates[6], 'MMM')
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
}
