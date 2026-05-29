import { Component } from '@angular/core';
import { OtherStatistics } from './other-statistics/other-statistics';
import { TodayFeeling } from './today-feeling/today-feeling';

@Component({
  selector: 'app-month-details',
  imports: [OtherStatistics, TodayFeeling],
  templateUrl: './month-details.html',
  styleUrl: './month-details.scss',
})
export class MonthDetails { }
