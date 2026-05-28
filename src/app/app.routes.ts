import { Routes } from '@angular/router';
import { MonthDetails } from './month-details/month-details';
import { MoodView } from './mood-view/mood-view';

export const routes: Routes = [
	{ path: '', component: MoodView },
	{ path: 'dashboard', component: MonthDetails }
];
