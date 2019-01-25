import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any>{
    return this.http.get("http://localhost:3000/customers")
              .pipe(map(response => {
                return response;                
              }));
  }

  getSurvey(customer_id: string, survey_id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/customers/${customer_id}/surveys/${survey_id}`)
                    .pipe(map(response => {
                      return response;
                    }))
  }

  updateSurvey(customer_id: string, survey_id: string, completeSurvey){
    console.log(completeSurvey);
    let body = JSON.stringify(completeSurvey[0]);
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    this.http.put(`http://localhost:3000/surveys/${survey_id}`,body, httpOptions).subscribe(
      response =>console.log(response),
      error => console.log(error)
    );
  }
}
