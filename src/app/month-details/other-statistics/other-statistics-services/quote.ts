// src/app/services/quote.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Quote {
	quote: string;
	author: string;
	category: string;
}

@Injectable({
	providedIn: 'root'
})
export class QuoteService {
	private http = inject(HttpClient);
	private apiUrl = 'https://api.api-ninjas.com/v1/quotes';

	private mapMoodToCategory(mood: string): string {
		const moodMap: Record<string, string> = {
			'happy': 'happiness',
			'anxious': 'anxiety',
			'sad': 'hope',
			'angry': 'patience',
			'tired': 'dreams',
			'neutral': 'inspirational'
		};

		return moodMap[mood.toLowerCase()] || 'inspirational';
	}

	getQuoteByMood(mood: string): Observable<Quote> {
		const category = this.mapMoodToCategory(mood);

		const headers = new HttpHeaders({
			'X-Api-Key': environment.apiNinjasKey
		});

		// API Ninjas returns an array of objects, e.g., [{ quote: '...', author: '...', category: '...' }]
		// We map it to just return the first quote object for ease of use.
		return this.http.get<Quote[]>(`${this.apiUrl}?category=${category}`, { headers }).pipe(
			map(response => response[0])
		);
	}
}