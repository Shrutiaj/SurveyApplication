import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
var CustomerListService = /** @class */ (function () {
    function CustomerListService(http) {
        this.http = http;
    }
    CustomerListService.prototype.getCustomerList = function () {
        return this.http.get("http://localhost:3000/customers")
            .pipe(map(function (response) {
            return response;
        }));
    };
    CustomerListService.prototype.getSurvey = function (customer_id, survey_id) {
        return this.http.get("http://localhost:3000/customers/" + customer_id + "/surveys/" + survey_id)
            .pipe(map(function (response) {
            return response;
        }));
    };
    CustomerListService.prototype.getSubmittedSurvey = function (username, survey_id) {
        return this.http.get("http://localhost:3000/users/" + username + "/submitedSurveys/" + survey_id)
            .pipe(map(function (response) {
            return response;
        }));
    };
    CustomerListService.prototype.updateSurvey = function (customer_id, survey_id, completeSurvey, isSubmitted) {
        var body = JSON.stringify(completeSurvey[0]);
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        if (isSubmitted == 'true') {
            return this.http.put("http://localhost:3000/submitedSurveys/" + survey_id, body, httpOptions).toPromise();
        }
        else {
            return this.http.post("http://localhost:3000/submitedSurveys", body, httpOptions).toPromise();
        }
    };
    CustomerListService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CustomerListService);
    return CustomerListService;
}());
export { CustomerListService };
//# sourceMappingURL=customer-list.service.js.map