import { Component, OnInit } from '@angular/core';

import { CompletedSurveysService } from '../services/completed-surveys.service';

import { SurveyHomeComponent } from '../survey-home/survey-home.component';

@Component({
  selector: 'app-completed-surveys',
  templateUrl: './completed-surveys.component.html',
  styleUrls: ['./completed-surveys.component.scss']
})
export class CompletedSurveysComponent implements OnInit {
  private username: string;
  private completedSurveyList = [];

  constructor(private surveyHomeComponent: SurveyHomeComponent, private completedSurveysService: CompletedSurveysService) { }

  ngOnInit() {
    this.username = this.surveyHomeComponent.username;
    this.completedSurveysService.getCompletedSuvreys(this.username).subscribe(
      result => {
        this.completedSurveyList = result;
      },
      error => console.log(error)
    )
  }

}
