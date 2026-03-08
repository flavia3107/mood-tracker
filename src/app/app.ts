import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Calendar } from './calendar/calendar';
import { MoodView } from './mood-view/mood-view';

@Component({
  selector: 'app-root',
  imports: [Calendar, MoodView],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('mood-tracker');
}
