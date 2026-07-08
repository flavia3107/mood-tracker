import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { NgApexchartsModule, ApexLegend } from 'ng-apexcharts';
import { Observable, of } from 'rxjs';
import { ChartOptions } from '../../../shared/constants/chart-models';
import { ACTIVITY_STATUS, MONTHLY_MOOD_CONFIG, MOOD_ENTRIES } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';
import { QuoteService } from './other-statistics-services/quote';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-other-statistics',
  imports: [NgApexchartsModule, AsyncPipe, MatIconModule],
  templateUrl: './other-statistics.html',
  styleUrl: './other-statistics.scss',
})
export class OtherStatistics {
  private _quoteService = inject(QuoteService);
  private _utilService = inject(UtilsService);
  public activityStatus: string = '';
  public moodData = computed(() => this._utilService.calculateMood());
  public quote$: Observable<any> = of(null);
  public journalSnippet: string | null = null;
  public chartOptions = computed<ChartOptions>(() => this._getChartConfig());
  public iconColors = computed(() => this._getIconColors());
  public randomValues = { sleep: 0, social: 0, exercise: 0 };

  private _getIconColors() {
    const colorConfig = MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()];
    return { sleep: colorConfig[1].color, social: colorConfig[3].color, exercise: colorConfig[5].color }
  }
  constructor() {
    effect(() => this._getTodayQuote());
  }

  private _getValues() {
    const val1 = Math.floor(Math.random() * 97) + 1;
    const val2 = Math.floor(Math.random() * (98 - val1)) + 1;
    const val3 = Math.floor(Math.random() * (99 - (val1 + val2))) + 1;
    return { sleep: val1, social: val2, exercise: val3 }
  }

  private _getChartConfig(): ChartOptions {
    const data = this.moodData();
    return {
      series: data.map((d: any) => d.value),
      labels: data.map((d: any) => d.mood),
      colors: data.map((d: any) => MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()]
        .find((el: { label: string, color: string }) => el.label === d.mood)?.color),
      chart: {
        type: 'donut',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            } as ApexLegend,
          },
        },
      ],
    };
  };

  private _getTodayQuote() {
    const today = this._utilService.todayMood()['label'];
    const moodEntries = MOOD_ENTRIES[today];
    this.quote$ = this._quoteService.getQuoteByMood(today);
    this.journalSnippet = moodEntries?.[Math.floor(Math.random() * moodEntries?.length)];
    this.randomValues = this._getValues();
    this.activityStatus = ACTIVITY_STATUS[today ? 'update' : 'no_update'];
    // for update show hour-date , for no update show date today
  }
}
