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
  private surveyId; // to get the survey details from API
  private isSubmitted = "false"; // checks if survey is submitted
  errMessage: string; // to display in case error occurs
  username = "";
  survey = {
    surveyId: 0,
    customerId: 0,
    surveyName: "",
    surveyQuestions: [],
  }; // stores details about the survey
  submittedSurveys = []; // stores the submitted survey

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
        this.surveyId = params.get("surveyId");
        this.submittedSurveys = this.surveyHomeComponent.user.submittedSurveys.filter(
          (obj) => obj.surveyId == this.surveyId
        );

        this.completedSurveysService.getSurveyById(this.surveyId).subscribe(
          (survey) => {
            if (this.isSubmitted == "true") {
              for (var submittedSurvey of this.submittedSurveys) {
                survey.surveyQuestions.find(
                  (elem) => elem.questionId == submittedSurvey.questionId
                ).answer = submittedSurvey.answer;
              }
            }
            this.survey.surveyId = survey.surveyId;
            this.survey.customerId = survey.customerId;
            this.survey.surveyName = survey.surveyName;
            this.survey.surveyQuestions = survey.surveyQuestions;
            this.survey.surveyQuestions.sort((elem1, elem2) => {
              console.log(elem1.answer);
              return elem1.questionId - elem2.questionId;
            });
          },
          (error) => {
            console.log(error);
            this.errMessage =
              "There is a problem with your request. Please try again later...";
          }
        );
      },
      (error) => {
        console.log(error);
        this.errMessage =
          "There is a problem with your request. Please try again later...";
      }
    );
  }

  onSubmit() {
    if (this.isSubmitted == "true") {
      for (let updatedSurvey of this.survey.surveyQuestions) {
        this.submittedSurveys.find(
          (elem) => elem.questionId == updatedSurvey.questionId
        ).answer = updatedSurvey.answer;
      }
      this.completedSurveysService
        .updateSurvey(this.submittedSurveys)
        .subscribe();
    } else {
      for (let question of this.survey.surveyQuestions) {
        let submittedSurvey = {
          questionId: 0,
          answer: "",
          username: this.username,
          customerId: this.survey.customerId,
          surveyId: this.survey.surveyId,
        };
        submittedSurvey.answer = question.answer;
        submittedSurvey.questionId = question.questionId;
        this.submittedSurveys.push(submittedSurvey);
      }
      this.completedSurveysService
        .saveSurvey(this.submittedSurveys)
        .subscribe();
    }

    this.router.navigateByUrl(`home/${this.username}`);
  }
}
