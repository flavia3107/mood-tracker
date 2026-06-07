import { Component, computed, inject } from '@angular/core';
import { NgApexchartsModule, } from 'ng-apexcharts';
import { ChartOptions } from '../../../shared/constants/chart-models';
import { MONTHLY_MOOD_CONFIG } from '../../../shared/constants/constants';
import { UtilsService } from '../../../shared/services/utils';

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
  public chartOptions = computed(() => this._getChartConfig());

  private _getChartConfig() {
    const color = MONTHLY_MOOD_CONFIG[this._utilService.activeMonth()][2].color;
    const mappedData = this._currentMonth().map((day: any) => ({
      x: new Date(this._selectedDate().getFullYear(), this._selectedDate().getMonth(), day.dayNumber).getTime(),
      y: day.value
    })).sort((a: any, b: any) => a.x - b.x);

    const chartConfig: Partial<ChartOptions> = {
      series: [
        { name: 'Mood', data: mappedData }
      ],
      colors: [color],
      labels: mappedData.map((d: any) => new Date(d.x).toDateString()),
      chart: {
        type: 'area',
        height: 300,
        zoom: { enabled: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: { type: 'datetime' },
    };
    return chartConfig;
  }
}
