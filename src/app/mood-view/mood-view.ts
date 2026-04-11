import { NgTemplateOutlet } from '@angular/common';
import { computed, viewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Component, inject } from '@angular/core';
import { UtilsService } from '../../shared/services/utils';
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
  imports: [January, February, March, April, May, June, July, August, September, October, November, December, NgTemplateOutlet],
  templateUrl: './mood-view.html',
  styleUrl: './mood-view.scss',
})
export class MoodView {
  private _utilService = inject(UtilsService);
  public currentMonth = this._utilService.activeMonth;
  jan = viewChild<TemplateRef<any>>('january');
  feb = viewChild<TemplateRef<any>>('february');
  mar = viewChild<TemplateRef<any>>('march');
  apr = viewChild<TemplateRef<any>>('april');
  may = viewChild<TemplateRef<any>>('may');
  jun = viewChild<TemplateRef<any>>('june');
  jul = viewChild<TemplateRef<any>>('july');
  aug = viewChild<TemplateRef<any>>('august');
  sep = viewChild<TemplateRef<any>>('september');
  oct = viewChild<TemplateRef<any>>('october');
  nov = viewChild<TemplateRef<any>>('november');
  dec = viewChild<TemplateRef<any>>('december');
  moodLogic = {
    // This wraps your color logic
    getColor: (day: number) => this.getMoodColorForDate(day),

    // This wraps your click/update logic
    select: (day: number) => this.onDayClick(day)
  };


  // Use computed to create a reactive template selector
  activeTemplate = computed(() => {
    const map: Record<string, TemplateRef<any> | undefined> = {
      'January': this.jan(),
      'February': this.feb(),
      'March': this.mar(),
      'April': this.apr(),
      'May': this.may(),
      'June': this.jun(),
      'July': this.jul(),
      'August': this.aug(),
      'September': this.sep(),
      'October': this.oct(),
      'November': this.nov(),
      'December': this.dec(),
    };

    return map[this.currentMonth()];
  });


  private getMoodColorForDate(day: number) {
    // Your logic to check if it's the past and return a random color
  }

  private onDayClick(day: number) {
    // Your logic to open a modal or update the mood
  }
}
