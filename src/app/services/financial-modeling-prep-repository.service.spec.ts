import { TestBed } from '@angular/core/testing';

import { FinancialModelingPrepRepositoryService } from './financial-modeling-prep-repository.service';

describe('FinancialModelingPrepRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialModelingPrepRepositoryService = TestBed.get(FinancialModelingPrepRepositoryService);
    expect(service).toBeTruthy();
  });
});
