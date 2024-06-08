import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opinion } from './opinion.model';

@Injectable({
  providedIn: 'root',
})
export class OpinionServiceService {
  private apiUrl = 'http://localhost:4201/opinion';

  constructor(private http: HttpClient) {}

  getOpinions(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this.apiUrl);
  }
}
