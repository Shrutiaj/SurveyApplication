import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.users = [];
        this.user = {
            id: "",
            password: "",
            submitedSurveys: []
        };
        this.isValid = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.getUsers().subscribe(function (response) {
            _this.users = response;
            console.log(_this.users);
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.users.forEach(function (user) {
            if (user.id == _this.user.id && user.password == _this.user.password) {
                _this.isValid = true;
            }
        });
        if (this.isValid) {
            this.router.navigateByUrl("home/" + this.user.id);
        }
        else {
            console.log(this.isValid);
        }
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map