// src/app/services/quote.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../envirornments/environment';

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

	public getQuoteByMood(mood: string): Observable<string> {
		const headers = new HttpHeaders({ 'X-Api-Key': environment.ninja_api });
		return this.http.get<Quote[]>(`${this.apiUrl}`, { headers }).pipe(
			map(response => response[0].quote)
		);
	}
}