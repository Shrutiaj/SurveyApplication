import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SurveyHomeComponent } from "./components/survey-home/survey-home.component";

import { CustomerListService } from "./services/customer-list.service";
import { SurveyDetailComponent } from "./components/survey-detail/survey-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { CompletedSurveysComponent } from "./components/completed-surveys/completed-surveys.component";
import { UniquePipe } from './pipes/unique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SurveyHomeComponent,
    SurveyDetailComponent,
    LoginComponent,
    CompletedSurveysComponent,
    UniquePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CustomerListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
