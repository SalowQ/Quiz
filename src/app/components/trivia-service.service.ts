import { Question } from './question';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriviaServiceService {
  private readonly API = 'https://the-trivia-api.com/v2';
  constructor(private http: HttpClient) {}

  fetch(id: string): Observable<Question> {
    const url = `${this.API}/question/${id}`;
    // console.log(url);
    return this.http.get<Question>(url);
  }
}
