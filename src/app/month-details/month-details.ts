import { Component } from '@angular/core';
import { AverageFeeling } from './average-feeling/average-feeling';
import { MoodTrends } from './mood-trends/mood-trends';
import { OtherStatistics } from './other-statistics/other-statistics';
import { TodayFeeling } from './today-feeling/today-feeling';
import { WeeklyFeeling } from './weekly-feeling/weekly-feeling';

@Component({
  selector: 'app-month-details',
  imports: [OtherStatistics, TodayFeeling, AverageFeeling, WeeklyFeeling, MoodTrends],
  templateUrl: './month-details.html',
  styleUrl: './month-details.scss',
})
export class MonthDetails { }
