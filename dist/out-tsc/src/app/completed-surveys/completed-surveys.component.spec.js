import { async, TestBed } from '@angular/core/testing';
import { CompletedSurveysComponent } from './completed-surveys.component';
describe('CompletedSurveysComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CompletedSurveysComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CompletedSurveysComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=completed-surveys.component.spec.js.map