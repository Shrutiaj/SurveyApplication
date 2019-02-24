import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var CheckpointService = /** @class */ (function () {
    function CheckpointService(http) {
        this.http = http;
    }
    CheckpointService_1 = CheckpointService;
    CheckpointService.prototype.getNextSurveyId = function () {
        return this.http.get("http://localhost:3000/checkpoint")
            .pipe(map(function (response) {
            return response;
        }));
    };
    CheckpointService.prototype.updateNextSurveyId = function (checkpoint) {
        var body = JSON.stringify(CheckpointService_1[0]);
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://localhost:3000/checkpoint", body, httpOptions).toPromise();
    };
    var CheckpointService_1;
    CheckpointService = CheckpointService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CheckpointService);
    return CheckpointService;
}());
export { CheckpointService };
//# sourceMappingURL=checkpoint.service.js.map