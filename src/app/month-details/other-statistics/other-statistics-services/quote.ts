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
	private _http = inject(HttpClient);
	private _apiUrl = 'https://api.api-ninjas.com/v1/quotes';

	public getQuoteByMood(): Observable<string> {
		const headers = new HttpHeaders({ 'X-Api-Key': environment.ninja_api });
		return this._http.get<Quote[]>(`${this._apiUrl}`, { headers }).pipe(
			map(response => response[0].quote)
		);
	}
}