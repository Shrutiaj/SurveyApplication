import { Component, OnInit } from "@angular/core";

import { CompletedSurveysService } from "../../services/completed-surveys.service";

import { SurveyHomeComponent } from "../survey-home/survey-home.component";

@Component({
  selector: "app-completed-surveys",
  templateUrl: "./completed-surveys.component.html",
  styleUrls: ["./completed-surveys.component.scss"],
})
export class CompletedSurveysComponent implements OnInit {
  private username: string;
  user = {
    username: "",
    password: "",
    submittedSurveys: [],
  };
  private errMsg = "";

  constructor(private surveyHomeComponent: SurveyHomeComponent) {}

  ngOnInit() {
    if (this.surveyHomeComponent.user.username) {
      this.username = this.surveyHomeComponent.username;
      this.user.username = this.surveyHomeComponent.user.username;
      this.user.submittedSurveys = this.surveyHomeComponent.user.submittedSurveys;
    } else {
      this.errMsg = "Something went wrong. try again later";
    }
  }
}
