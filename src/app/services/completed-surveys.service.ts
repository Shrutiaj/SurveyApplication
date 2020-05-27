import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
}
