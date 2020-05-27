import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { SurveyHomeComponent } from "../survey-home/survey-home.component";
import { CompletedSurveysService } from "src/app/services/completed-surveys.service";

@Component({
  selector: "app-survey-detail",
  templateUrl: "./survey-detail.component.html",
  styleUrls: ["./survey-detail.component.scss"],
})
export class SurveyDetailComponent implements OnInit {
  private surveyId;
  username: string;
  private isSubmitted: string;
  survey = [];
  submittedSurveys = [];

  constructor(
    private route: ActivatedRoute,
    private completedSurveysService: CompletedSurveysService,
    private surveyHomeComponent: SurveyHomeComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.username = this.surveyHomeComponent.username;
    this.route.queryParams.subscribe(
      (params) => (this.isSubmitted = params.isSubmitted)
    );
    this.route.paramMap.subscribe(
      (params) => {
        this.surveyId = params.get("survey_id");
        this.submittedSurveys = this.surveyHomeComponent.user.submittedSurveys.filter(
          (obj) => obj.survey_id == this.surveyId
        );
        this.completedSurveysService.getSurveyById(this.surveyId).subscribe(
          (survey) => {
            if (this.isSubmitted == "true") {
              for (var submittedSurvey of this.submittedSurveys) {
                survey.surveyQuestions.find(
                  (elem) => elem.question_id == submittedSurvey.question_id
                ).answer = submittedSurvey.answer;
              }
            }
            this.survey = survey;
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.router.navigateByUrl(`home/${this.username}`);
  }
}
