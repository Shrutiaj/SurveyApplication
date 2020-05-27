import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SurveyHomeComponent } from "./components/survey-home/survey-home.component";
import { SurveyDetailComponent } from "./components/survey-detail/survey-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { CompletedSurveysComponent } from "./components/completed-surveys/completed-surveys.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "home/:username",
    component: SurveyHomeComponent,
    children: [
      { path: "surveyList", component: CompletedSurveysComponent },
      { path: "survey/:survey_id", component: SurveyDetailComponent },
      { path: "", redirectTo: "surveyList", pathMatch: "full" },
    ],
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
