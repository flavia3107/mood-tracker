import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ApexAnnotations, ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStates, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, NgApexchartsModule } from 'ng-apexcharts';
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
  selector: 'app-weekly-feeling',
  imports: [DatePipe, NgApexchartsModule],
  templateUrl: './weekly-feeling.html',
  styleUrl: './weekly-feeling.scss',
})
export class WeeklyFeeling {
  private _utilService = inject(UtilsService);
  readonly monthConfig = this._utilService.monthConfig;
  public weekDays = computed(() => this._getWeekDays());

  private _getWeekDays() {
    const month = this.monthConfig();
    const weekDates = this._utilService.getWeekDays();

    return this.monthConfig()
      .filter(item => weekDates.filter(d => d.getDate() === (item.day ?? item.id)).length > 0)
      .map(item => ({ ...item, date: weekDates.filter(d => d.getDate() === (item.day ?? item.id))[0] }));
  }

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        data: this.weekDays().map(day => day.value),
      },
    ],
    chart: {
      type: 'area',
      height: 50,
      width: 280,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: this.weekDays().map(day => new Date(day.date).toDateString()),
    xaxis: {
      type: 'datetime',
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
}
