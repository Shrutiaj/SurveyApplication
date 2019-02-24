import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletedSurveysService {
  private user_id: string;
  constructor(private http: HttpClient) { }

  getCompletedSuvreys(user_id): Observable<any>{
    return this.http.get(`http://localhost:3000/users/${user_id}/submitedSurveys`)
                    .pipe(map(response => response));

  }
}
