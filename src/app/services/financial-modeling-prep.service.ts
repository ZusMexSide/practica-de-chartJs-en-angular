import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinancialModelingPrepService {
  currencies: any;
  history: any;
  constructor(private http: HttpClient) { }
  proxy = 'https://cors-anywhere.herokuapp.com/';
  async getCurrencies(): Promise<any> {
    this.currencies = await this.http.get(`${this.proxy}https://financialmodelingprep.com/api/v3/cryptocurrencies`).toPromise();
    return this.currencies;
  }

  async getHistorical(): Promise<any> {
    this.history = await this.http.get(`${this.proxy}https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line`).toPromise();
    return this.history;
  }
}
