import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerListService } from '../services/customer-list.service';

@Component({
  selector: 'app-survey-home',
  templateUrl: './survey-home.component.html',
  styleUrls: ['./survey-home.component.scss']
})
export class SurveyHomeComponent implements OnInit {  
  customers = [];
  username: string;
  constructor(private customerListService: CustomerListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.username = params.get('username');
      });
    this.customerListService.getCustomerList().subscribe(
      customers => {
        this.customers = customers;
      },
      error => console.log(error)
    )
  }

}
