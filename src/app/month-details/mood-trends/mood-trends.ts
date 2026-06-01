import { formatDate } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexMarkers,
  ApexPlotOptions,
  ApexResponsive,
  ApexGrid,
  ApexAnnotations,
  ApexStates,
  ApexTheme,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { UtilsService } from '../../../shared/services/utils';

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
  selector: 'app-mood-trends',
  imports: [NgApexchartsModule],
  templateUrl: './mood-trends.html',
  styleUrl: './mood-trends.scss',
})
export class MoodTrends {
  private _utilService = inject(UtilsService);
  private _currentMonth = this._utilService.monthConfig;
  private _selectedDate = this._utilService.selectedDate;

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        data: this._currentMonth().map(day => day.value),
      },
    ],
    chart: {
      type: 'area',
      height: 250,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    labels: this._currentMonth().map(day => new Date(this._selectedDate().getFullYear(), this._selectedDate().getMonth(), day.dayNumber).toDateString()),
    xaxis: {
      type: 'datetime',
    },
  };

}
