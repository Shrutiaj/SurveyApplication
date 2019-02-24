import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.getUsers = function () {
        return this.http.get("http://localhost:3000/users")
            .pipe(map(function (response) {
            return response;
        }));
    };
    LoginService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.http.post("http://localhost:3000/users", body, httpOptions).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map