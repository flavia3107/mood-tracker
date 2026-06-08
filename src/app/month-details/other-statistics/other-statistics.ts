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
    { mood: 'Happy', value: 44 },
    { mood: 'Calm', value: 55 },
    { mood: 'Stressed', value: 41 },
    { mood: 'Sad', value: 17 },
    { mood: 'Energetic', value: 15 }
  ]);

  public chartOptions = computed<Partial<ChartOptions>>(() => {
    const currentData = this.moodData();

    return {
      series: currentData.map(item => item.value),
      labels: currentData.map(item => item.mood),
      // Add your custom hex codes here (order matches the array slices)
      colors: ['#FFD700', '#4CAF50', '#F44336', '#2196F3', '#FF9800'],
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
