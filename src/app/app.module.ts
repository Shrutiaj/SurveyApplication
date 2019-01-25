import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyHomeComponent } from './survey-home/survey-home.component';

import { CustomerListService } from './services/customer-list.service';
import { SurveyDetailComponent } from './survey-detail/survey-detail.component';
import { LoginComponent } from './login/login.component';
import { CompletedSurveysComponent } from './completed-surveys/completed-surveys.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyHomeComponent,
    SurveyDetailComponent,
    LoginComponent,
    CompletedSurveysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
