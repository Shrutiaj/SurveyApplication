import { Component, OnInit } from '@angular/core';

import { SurveyHomeComponent } from '../survey-home/survey-home.component';

@Component({
  selector: 'app-completed-surveys',
  templateUrl: './completed-surveys.component.html',
  styleUrls: ['./completed-surveys.component.scss']
})
export class CompletedSurveysComponent implements OnInit {
  private username: string;

  constructor(private surveyHomeComponent: SurveyHomeComponent) { }

  ngOnInit() {
    this.username = this.surveyHomeComponent.username;
  }

}
