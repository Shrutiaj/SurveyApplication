import { TestBed } from '@angular/core/testing';

import { CompletedSurveysService } from './completed-surveys.service';

describe('CompletedSurveysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedSurveysService = TestBed.get(CompletedSurveysService);
    expect(service).toBeTruthy();
  });
});
