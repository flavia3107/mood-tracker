import { formatDate } from '@angular/common';
import { computed, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {

	private _selectedDate = signal<Date>(new Date());
	public calendarDays = computed(() => this._getDaysInMonth());
	public activeMonth = computed(() => this._getMonth());
	public monthDays = computed(() => this._getMonthDays());

	private _getDaysInMonth(): string[] {
		const date = this._selectedDate();
		const year = date.getFullYear();
		const month = date.getMonth();
		const numDays = new Date(year, month + 1, 0).getDate();
		const daysArray = [];
		const firstDayOfMonth = new Date(year, month, 1).getDay();
		const daysFromPrevMonth = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
		const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
		for (let i = lastDayOfPrevMonth - daysFromPrevMonth; i <= lastDayOfPrevMonth; i++) {
			daysArray.push(formatDate(new Date(year, month - 1, i), 'yyyy-MM-dd', 'en-US'));
		}

		for (let day = 1; day <= numDays; day++) {
			daysArray.push(formatDate(new Date(year, month, day), 'yyyy-MM-dd', 'en-US'));
		}

		const lastDayOfMonth = new Date(year, month + 1, 0).getDay();
		const daysFromNextMonth = (lastDayOfMonth === 6 ? 0 : 6 - lastDayOfMonth);
		for (let i = 1; i <= daysFromNextMonth; i++) {
			daysArray.push(formatDate(new Date(year, month + 1, i), 'yyyy-MM-dd', 'en-US'));
		}
		return daysArray;
	}

	private _getMonth(): string {
		return this._selectedDate().toLocaleString('en-US', { month: 'long' });
	}

	private _getMonthDays(): any {
		const date = this._selectedDate();
		const year = date.getFullYear();
		return new Date(year, date.getMonth() + 1, 0).getDate();
	}

	public updateActiveDate(date: Date) {
		this._selectedDate.set(date);
	}

	public generateRandomNumber(min: number, max: number): number {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}