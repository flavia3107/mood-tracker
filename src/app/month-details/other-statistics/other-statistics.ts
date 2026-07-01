import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';
import { NgApexchartsModule, ApexLegend } from 'ng-apexcharts';
import { Observable, of } from 'rxjs';
import { ChartOptions } from '../../../shared/constants/chart-models';
import { MONTHLY_MOOD_CONFIG, MOOD_ENTRIES } from '../../../shared/constants/constants';
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
  public moodData = computed(() => this._utilService.calculateMood());
  public quote$: Observable<any> = of(null);
  public journalSnippet: string | null = null;
  public chartOptions = computed<ChartOptions>(() => this._getChartConfig());

  constructor() {
    effect(() => this._getTodayQuote());
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
  }
}
