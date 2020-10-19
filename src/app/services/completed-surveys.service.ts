import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CompletedSurveysService {
  private user_id: string;
  constructor(private http: HttpClient) {}

  getCompletedSuvreyList(username): Observable<any> {
    return this.http
      .get(`http://localhost:8080/Survey/user/getUser?username=${username}`)
      .pipe(map((response) => response));
  }

  getSurveyById(surveyId): Observable<any> {
    return this.http
      .get(`http://localhost:8080/Survey/survey/byId?surveyId=${surveyId}`)
      .pipe(map((response) => response));
  }

  saveSurvey(submittedSurvey): Observable<any> {
    let body = JSON.stringify(submittedSurvey);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    console.log("In save survey service");
    console.log(body);
    return this.http
      .post(`http://localhost:8080/Survey/saveSurvey`, body, httpOptions)
      .pipe();
  }

  updateSurvey(submittedSurvey): Observable<any> {
    let body = JSON.stringify(submittedSurvey);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    console.log("In update survey service");
    console.log(body);
    return this.http
      .post(`http://localhost:8080/Survey/updateSurvey`, body, httpOptions)
      .pipe();
  }
}
