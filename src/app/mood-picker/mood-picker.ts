import { Component, computed, inject, output } from '@angular/core';
import { MONTHLY_MOOD_CONFIG } from '../../shared/constants/constants';
import { UtilsService } from '../../shared/services/utils';

@Component({
  selector: 'app-mood-picker',
  templateUrl: './mood-picker.html',
  styleUrl: './mood-picker.scss',
})
export class MoodPicker {
  private _utilsService = inject(UtilsService);
  public moods = computed(() => MONTHLY_MOOD_CONFIG[this._utilsService.activeMonth()]);
  public selectedMood = '';
  public moodColorSelected = output<{ [key: string]: string }>();

  setMood(mood: { [key: string]: string }) {
    this.selectedMood = mood['color'];
    this.moodColorSelected.emit(mood);
  }
}
