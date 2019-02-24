import { TestBed } from '@angular/core/testing';
import { CustomerListService } from './customer-list.service';
describe('CustomerListService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CustomerListService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=customer-list.service.spec.js.map