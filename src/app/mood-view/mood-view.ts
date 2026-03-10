import { Component } from '@angular/core';
import { April } from '../months/april/april';
import { August } from '../months/august/august';
import { December } from '../months/december/december';
import { February } from '../months/february/february';
import { January } from '../months/january/january';
import { July } from '../months/july/july';
import { June } from '../months/june/june';
import { March } from '../months/march/march';
import { May } from '../months/may/may';
import { November } from '../months/november/november';
import { October } from '../months/october/october';
import { September } from '../months/september/september';

@Component({
  selector: 'app-mood-view',
  imports: [January, February, March, April, May, June, July, August, September, October, November, December],
  templateUrl: './mood-view.html',
  styleUrl: './mood-view.scss',
})
export class MoodView {
  currentMonth = 'December';
}
