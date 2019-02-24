import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CheckpointService {

  constructor(private http: HttpClient) { }

  getNextSurveyId(): Observable<any>{
    return this.http.get("http://localhost:3000/checkpoint")
                    .pipe(map(response => {
                      return response;                
                    }));
  }

  updateNextSurveyId(checkpoint): Promise<any>{
    let body = JSON.stringify(checkpoint[0]);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.put(`http://localhost:3000/checkpoint/1`,body, httpOptions).toPromise();
  }
}
