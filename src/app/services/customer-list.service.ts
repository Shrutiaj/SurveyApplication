import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerListService {
  constructor(private http: HttpClient) {}

  //Get the customers list
  getCustomerList(): Observable<any> {
    return this.http.get("http://localhost:8080/Survey/customers/all").pipe(
      map((response) => {
        return response;
      })
    );
  }

  //Get the survey list for the particular customer as indicated in the "customer_id" parameter
  getSurvey(customer_id: string, survey_id: string): Observable<any> {
    return this.http
      .get(`http://localhost:8080/Survey/survey/byId?surveyId=${survey_id}`)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  //Get the list of surveys submitted by a particular user as indicated in the "username" paramter
  getSubmittedSurvey(username: string, survey_id: string): Observable<any> {
    return this.http
      .get(
        `http://localhost:3000/users/${username}/submitedSurveys/${survey_id}`
      )
      .pipe(
        map((response) => {
          return response;
        })
      );
  }

  //Update the survey on the server depending on it is new submission or an  update to existing one
  updateSurvey(
    customer_id: string,
    survey_id: string,
    completeSurvey,
    isSubmitted: string
  ): Promise<any> {
    let body = JSON.stringify(completeSurvey[0]);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    if (isSubmitted == "true") {
      return this.http
        .put(
          `http://localhost:3000/submitedSurveys/${survey_id}`,
          body,
          httpOptions
        )
        .toPromise();
    } else {
      return this.http
        .post(`http://localhost:3000/submitedSurveys`, body, httpOptions)
        .toPromise();
    }
  }
}
