import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MONTHLY_BACKGROUNDS_COLORS } from '../shared/constants/constants';
import { UtilsService } from '../shared/services/utils';
import { Calendar } from './calendar/calendar';

@Component({
  selector: 'app-root',
  imports: [Calendar, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private _utilService = inject(UtilsService);
  protected readonly title = signal('mood-tracker');
  protected background = computed(() => this._getBackground());

  private _getBackground() {
    const activeMonth = this._utilService.activeMonth();
    return MONTHLY_BACKGROUNDS_COLORS[activeMonth]
  }
}
