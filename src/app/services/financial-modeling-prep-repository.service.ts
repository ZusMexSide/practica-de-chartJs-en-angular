import { Injectable } from '@angular/core';
import { FinancialModelingPrepService } from './financial-modeling-prep.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialModelingPrepRepositoryService {
  private currencies: any;
  private history: any;
  constructor(private dataSource: FinancialModelingPrepService) {
  
  }

  getCurrencies() {
    return this.currencies;
  }

  getHystory() {
    return this.history;
  }
}
