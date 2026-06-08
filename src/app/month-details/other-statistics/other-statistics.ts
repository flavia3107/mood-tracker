import { Component, computed, signal } from '@angular/core';
import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle, ApexDataLabels, ApexStroke, ApexFill, ApexLegend, ApexTooltip, ApexMarkers, ApexPlotOptions, ApexResponsive, ApexGrid, ApexAnnotations, ApexStates, ApexTheme, NgApexchartsModule } from 'ng-apexcharts';

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
  imports: [NgApexchartsModule],
  templateUrl: './other-statistics.html',
  styleUrl: './other-statistics.scss',
})
export class OtherStatistics {
  public moodData = signal([
    { mood: 'Happy', value: 44, color: '#FFD700' },
    { mood: 'Calm', value: 55, color: '#4CAF50' },
    { mood: 'Stressed', value: 41, color: '#F44336' },
    { mood: 'Sad', value: 17, color: '#2196F3' },
    { mood: 'Energetic', value: 15, color: '#FF9800' }
  ]);

  public chartOptions = computed<ChartOptions>(() => {
    const data = this.moodData();

    return {
      series: data.map(d => d.value),
      labels: data.map(d => d.mood),
      colors: data.map(d => d.color), // Defined cleanly here
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
