import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MONTHLY_BACKGROUNDS_COLORS } from '../shared/constants/constants';
import { UtilsService } from '../shared/services/utils';
import { Calendar } from './calendar/calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Calendar, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private _utilService = inject(UtilsService);
  private _router = inject(Router);
  protected readonly title = signal('mood-tracker');
  protected background = computed(() => this._getBackground());
  public activeRoute = '/';

  private _getBackground() {
    const activeMonth = this._utilService.activeMonth();
    return MONTHLY_BACKGROUNDS_COLORS[activeMonth]
  }

  public navigate() {
    this.activeRoute = this.activeRoute === '/' ? '/dashboard' : '/';
    this._router.navigateByUrl(this.activeRoute);
  }
}
