import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerListService } from '../services/customer-list.service';
import { SurveyHomeComponent } from '../survey-home/survey-home.component';
import { CheckpointService } from '../services/checkpoint.service';
var SurveyDetailComponent = /** @class */ (function () {
    function SurveyDetailComponent(route, customerListService, surveyHomeComponent, router, checkpointService) {
        this.route = route;
        this.customerListService = customerListService;
        this.surveyHomeComponent = surveyHomeComponent;
        this.router = router;
        this.checkpointService = checkpointService;
        this.checkpoint = [];
        this.survey = [];
    }
    SurveyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.surveyHomeComponent.username;
        this.route.queryParams.subscribe(function (params) { return _this.isSubmitted = params.isSubmitted; });
        this.route.paramMap.subscribe(function (params) {
            _this.survey_id = params.get('survey_id');
            _this.customer_id = params.get('username');
            if (_this.isSubmitted == 'true') {
                _this.customerListService.getSubmittedSurvey(_this.username, _this.survey_id).subscribe(function (survey) {
                    _this.survey = survey;
                }, function (error) { return console.log(error); });
            }
            else {
                _this.customerListService.getSurvey(_this.customer_id, _this.survey_id).subscribe(function (survey) {
                    _this.survey = survey;
                }, function (error) { return console.log(error); });
            }
        }, function (error) { return console.log(error); });
    };
    SurveyDetailComponent.prototype.onSubmit = function () {
        var _this = this;
        this.survey[0].userId = this.username;
        this.checkpointService.getNextSurveyId().subscribe(function (response) { return _this.checkpoint = response; }, function (error) { return console.log(error); });
        this.survey[0].id = this.checkpoint[0].nextSurveyId;
        this.customerListService.updateSurvey(this.customer_id, this.survey_id, this.survey, this.isSubmitted)
            .then(function (success) {
            _this.router.navigateByUrl("home/" + _this.username);
        }, function (rejected) { return console.log(rejected); });
        this.checkpointService.updateNextSurveyId(this.checkpoint[0]);
    };
    SurveyDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-survey-detail',
            templateUrl: './survey-detail.component.html',
            styleUrls: ['./survey-detail.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CustomerListService, SurveyHomeComponent, Router, CheckpointService])
    ], SurveyDetailComponent);
    return SurveyDetailComponent;
}());
export { SurveyDetailComponent };
//# sourceMappingURL=survey-detail.component.js.map