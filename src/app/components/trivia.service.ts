import { Question } from './question';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  private readonly API = 'https://the-trivia-api.com/v2';
  constructor(private http: HttpClient) {}

  fetch(dif: string): Observable<Question> {
    const url = `${this.API}/questions?limit=1&difficulties=${dif}`;
    return this.http.get<Question>(url);
  }
}
