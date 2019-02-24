import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomerListService } from '../services/customer-list.service';
var SurveyHomeComponent = /** @class */ (function () {
    function SurveyHomeComponent(customerListService, route, router) {
        this.customerListService = customerListService;
        this.route = route;
        this.router = router;
        this.customers = [];
    }
    SurveyHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.username = params.get('username');
        });
        this.customerListService.getCustomerList().subscribe(function (customers) {
            _this.customers = customers;
        }, function (error) { return console.log(error); });
    };
    SurveyHomeComponent.prototype.signOut = function () {
        this.username = "";
        this.router.navigateByUrl('login');
    };
    SurveyHomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-survey-home',
            templateUrl: './survey-home.component.html',
            styleUrls: ['./survey-home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [CustomerListService, ActivatedRoute, Router])
    ], SurveyHomeComponent);
    return SurveyHomeComponent;
}());
export { SurveyHomeComponent };
//# sourceMappingURL=survey-home.component.js.map