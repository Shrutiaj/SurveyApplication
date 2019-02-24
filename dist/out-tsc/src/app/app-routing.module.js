import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyHomeComponent } from './survey-home/survey-home.component';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { LoginComponent } from './login/login.component';
import { CompletedSurveysComponent } from './completed-surveys/completed-surveys.component';
var routes = [
    { path: "login", component: LoginComponent },
    {
        path: "home/:username", component: SurveyHomeComponent,
        children: [
            { path: "surveyList", component: CompletedSurveysComponent },
            { path: "survey/:username/:survey_id", component: SurveyDetailComponent },
            { path: "", redirectTo: "surveyList", pathMatch: "full" }
        ]
    },
    { path: "", redirectTo: "login", pathMatch: "full" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map