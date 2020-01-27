import { TestBed } from '@angular/core/testing';

import { FinancialModelingPrepService } from './financial-modeling-prep.service';

describe('FinancialModelingPrepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialModelingPrepService = TestBed.get(FinancialModelingPrepService);
    expect(service).toBeTruthy();
  });
});
