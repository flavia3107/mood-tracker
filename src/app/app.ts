import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, RouterModule } from '@angular/router';
import { MONTHLY_BACKGROUNDS_COLORS } from '../shared/constants/constants';
import { UtilsService } from '../shared/services/utils';
import { Calendar } from './calendar/calendar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [Calendar, RouterModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private _utilService = inject(UtilsService);
  private _router = inject(Router);
  private _nav = toSignal(this._router.events.pipe(filter(e => e instanceof NavigationEnd)));
  protected readonly title = signal('mood-tracker');
  protected background = computed(() => this._getBackground());
  public activeRoute = computed(() => {
    this._nav();
    return this._router.url;
  });

  private _getBackground() {
    const activeMonth = this._utilService.activeMonth();
    return MONTHLY_BACKGROUNDS_COLORS[activeMonth]
  }

  public navigate() {
    this._router.navigateByUrl(this.activeRoute() === '/' ? '/dashboard' : '/');
  }
}
