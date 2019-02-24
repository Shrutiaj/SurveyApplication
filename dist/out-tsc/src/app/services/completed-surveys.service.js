import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
var CompletedSurveysService = /** @class */ (function () {
    function CompletedSurveysService(http) {
        this.http = http;
    }
    CompletedSurveysService.prototype.getCompletedSuvreys = function (user_id) {
        return this.http.get("http://localhost:3000/users/" + user_id + "/submitedSurveys")
            .pipe(map(function (response) { return response; }));
    };
    CompletedSurveysService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CompletedSurveysService);
    return CompletedSurveysService;
}());
export { CompletedSurveysService };
//# sourceMappingURL=completed-surveys.service.js.map