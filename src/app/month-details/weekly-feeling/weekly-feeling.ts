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
    const weekConfig = this.monthConfig()
      .filter(item => weekDates.filter(d => d.getDate() === (item.day ?? item.id)).length > 0)
      .map(item => ({ ...item, date: weekDates.filter(d => d.getDate() === (item.day ?? item.id))[0] }));

    const monthConfig: { [key: string]: any } = {
      startDate: weekDates[0].toDateString(),
      endDate: weekDates[6].toDateString(),
      weekConfig,
      isSameMonth: this._datePipe.transform(weekDates[0], 'MMM') === this._datePipe.transform(weekDates[6], 'MMM')
    }
    return monthConfig
  }

  private _getChartConfig() {
    const config: Partial<ChartOptions> = {
      ...CHART_OPTIONS,
      series: [
        {
          data: this.weekDays()['weekConfig'].map((day: any) => day.value),
        },
      ],
      colors: [MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()][2].color],
      labels: this.weekDays()['weekConfig'].map((day: any) => new Date(day.date).toDateString()),
    };
    console.log('here', config)
    return config;
  }
}
