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
  providers: [DatePipe]
})
export class WeeklyFeeling {
  private _datePipe = inject(DatePipe);
  private _utilService = inject(UtilsService);
  readonly monthConfig = this._utilService.monthConfig;
  public weekDays = computed(() => this._getWeekDays());

  public chartOptions: Partial<ChartOptions> = {
    series: [
      {
        data: this.weekDays()['weekConfig'].map((day: any) => day.value),
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
    labels: this.weekDays()['weekConfig'].map((day: any) => new Date(day.date).toDateString()),
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

  private _getWeekDays() {
    const month = this.monthConfig();
    const weekDates = this._utilService.getWeekDays();
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
}
