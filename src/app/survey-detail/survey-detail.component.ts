import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CustomerListService } from '../services/customer-list.service';

import { SurveyHomeComponent } from '../survey-home/survey-home.component';
import { CheckpointService } from '../services/checkpoint.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent implements OnInit {
  private survey_id;
  private customer_id;
  private username: string;
  private isSubmitted: string;
  private checkpoint = [];
  survey = [];


  constructor(private route: ActivatedRoute, private customerListService: CustomerListService, private surveyHomeComponent: SurveyHomeComponent, private router: Router, private checkpointService: CheckpointService) { }

  ngOnInit() {
    this.username = this.surveyHomeComponent.username;
    this.route.queryParams.subscribe(params => this.isSubmitted = params.isSubmitted);
    this.route.paramMap.subscribe(
      (params) => {
        this.survey_id = params.get('survey_id');
        this.customer_id = params.get('username');
        if(this.isSubmitted == 'true') {
          this.customerListService.getSubmittedSurvey(this.username, this.survey_id).subscribe(
            survey => {
              this.survey = survey;
            },
            error => console.log(error)
          );
        }
        else{
          this.customerListService.getSurvey(this.customer_id, this.survey_id).subscribe(
            survey => {
              this.survey = survey;
            },
            error => console.log(error)
          )   
        }
           
      },
      error => console.log(error)
    )
  }

  onSubmit(){
    this.survey[0].userId = this.username;
    this.checkpointService.getNextSurveyId().subscribe(
      response => {
        this.checkpoint = response;
        if(!this.isSubmitted)
        {
          this.survey[0].id = this.checkpoint[0].nextSurveyId;
          this.checkpoint[0].nextSurveyId = "s"+((+this.checkpoint[0].nextSurveyId.match("[0-9]+")[0])+1).toString();
          this.checkpointService.updateNextSurveyId(this.checkpoint).then(
            success => console.log(success),
            error => console.log(error)
          );
        }
        this.customerListService.updateSurvey(this.customer_id, this.survey_id, this.survey, this.isSubmitted)
                            .then(success => {
                              this.router.navigateByUrl(`home/${this.username}`);
                            },
                            rejected => console.log(rejected)
                            );
      }, 
      error => console.log(error));
    
    
  }

  
}
