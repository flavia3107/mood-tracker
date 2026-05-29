import { Component } from '@angular/core';
import { OtherStatistics } from './other-statistics/other-statistics';

@Component({
  selector: 'app-month-details',
  imports: [OtherStatistics],
  templateUrl: './month-details.html',
  styleUrl: './month-details.scss',
})
export class MonthDetails { }
