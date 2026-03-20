import { Component, computed, inject, model, output } from '@angular/core';
import { MONTHLY_MOOD_CONFIG } from '../../shared/constants/constants';
import { UtilsService } from '../../shared/services/utils';

@Component({
  selector: 'app-mood-picker',
  imports: [],
  templateUrl: './mood-picker.html',
  styleUrl: './mood-picker.scss',
})
export class MoodPicker {
  private _utilsService = inject(UtilsService);
  public moods = computed(() => MONTHLY_MOOD_CONFIG[this._utilsService.activeMonth()]);
  public selectedMood = model();
  public moodColorSelected = output<string>();

  setMood(color: string) {
    this.selectedMood.set(color);
    this.moodColorSelected.emit(color);
  }
}
