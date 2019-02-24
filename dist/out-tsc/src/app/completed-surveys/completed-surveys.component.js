import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CompletedSurveysService } from '../services/completed-surveys.service';
import { SurveyHomeComponent } from '../survey-home/survey-home.component';
var CompletedSurveysComponent = /** @class */ (function () {
    function CompletedSurveysComponent(surveyHomeComponent, completedSurveysService) {
        this.surveyHomeComponent = surveyHomeComponent;
        this.completedSurveysService = completedSurveysService;
        this.completedSurveyList = [];
    }
    CompletedSurveysComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.surveyHomeComponent.username;
        this.completedSurveysService.getCompletedSuvreys(this.username).subscribe(function (result) {
            _this.completedSurveyList = result;
        }, function (error) { return console.log(error); });
    };
    CompletedSurveysComponent = tslib_1.__decorate([
        Component({
            selector: 'app-completed-surveys',
            templateUrl: './completed-surveys.component.html',
            styleUrls: ['./completed-surveys.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SurveyHomeComponent, CompletedSurveysService])
    ], CompletedSurveysComponent);
    return CompletedSurveysComponent;
}());
export { CompletedSurveysComponent };
//# sourceMappingURL=completed-surveys.component.js.map