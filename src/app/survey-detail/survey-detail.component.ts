import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerListService } from '../services/customer-list.service';

@Component({
  selector: 'app-survey-detail',
  templateUrl: './survey-detail.component.html',
  styleUrls: ['./survey-detail.component.scss']
})
export class SurveyDetailComponent implements OnInit {
  private survey_id;
  private customer_id;
  survey = [];


  constructor(private route: ActivatedRoute, private customerListService: CustomerListService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.survey_id = params.get('survey_id');
        this.customer_id = params.get('customer_id'); 
        this.customerListService.getSurvey(this.customer_id, this.survey_id).subscribe(
          survey => {
            this.survey = survey;
          },
          error => console.log(error)
        )      
      },
      error => console.log(error)
    )
  }

  onSubmit(){
    this.customerListService.updateSurvey(this.customer_id, this.survey_id, this.survey);
  }

  
}
