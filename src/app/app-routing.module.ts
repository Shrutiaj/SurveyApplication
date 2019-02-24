import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyHomeComponent } from './survey-home/survey-home.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { LoginComponent } from './login/login.component';
import { CompletedSurveysComponent } from './completed-surveys/completed-surveys.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {
    path: "home/:username", component: SurveyHomeComponent,
    children: [
      {path: "surveyList", component: CompletedSurveysComponent},
      {path: "survey/:username/:survey_id", component: SurveyDetailComponent},
      {path: "", redirectTo: "surveyList", pathMatch: "full"}
    ]
  },
  {path: "", redirectTo: "login", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
