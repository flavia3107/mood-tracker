import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  imports: [MatDatepickerModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calendar {
  selected = model<Date | null>(null);
}

