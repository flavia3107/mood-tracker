import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke, ApexFill, ApexLegend, ApexTooltip, ApexMarkers, ApexPlotOptions, ApexResponsive, ApexGrid, ApexAnnotations, ApexStates, ApexTheme, NgApexchartsModule } from 'ng-apexcharts';
import { Observable, of } from 'rxjs';
import { MONTHLY_MOOD_CONFIG } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';
import { QuoteService } from './other-statistics-services/quote';

export type ChartOptions = {
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart?: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis | ApexYAxis[];
  title?: ApexTitleSubtitle;
  subtitle?: ApexTitleSubtitle;
  dataLabels?: ApexDataLabels;
  stroke?: ApexStroke;
  fill?: ApexFill;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
  markers?: ApexMarkers;
  plotOptions?: ApexPlotOptions;
  responsive?: ApexResponsive[];
  grid?: ApexGrid;
  annotations?: ApexAnnotations;
  states?: ApexStates;
  theme?: ApexTheme;
  colors?: string[];
  labels?: any;
};
@Component({
  selector: 'app-other-statistics',
  imports: [NgApexchartsModule, AsyncPipe],
  templateUrl: './other-statistics.html',
  styleUrl: './other-statistics.scss',
})
export class OtherStatistics {
  private _quoteService = inject(QuoteService);
  private _utilService = inject(UtilsService);
  public moodData = computed(() => this._utilService.calculateMood());
  public quote$: Observable<any> = of(null);

  public chartOptions = computed<ChartOptions>(() => {
    this.quote$ = this._quoteService.getQuoteByMood('happy')
    const data = this.moodData();
    return {
      series: data.map((d: any) => d.value),
      labels: data.map((d: any) => d.mood),
      colors: data.map((d: any) => MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()].find((el: { label: string, color: string }) => el.label === d.mood)?.color),
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
  });
}
