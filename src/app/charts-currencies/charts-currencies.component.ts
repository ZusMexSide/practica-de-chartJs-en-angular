import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import {Chart} from 'chart.js';
import { FinancialModelingPrepService } from '../services/financial-modeling-prep.service';

@Component({
  selector: 'app-charts-currencies',
  templateUrl: './charts-currencies.component.html',
  styleUrls: ['./charts-currencies.component.scss'],
})
export class ChartsCurrenciesComponent implements OnInit {
  @ViewChild('barChart', {static: false}) barChart;
  bars: any;
  history: any[];
  objectDom: any;
  padre: any;
  arrayDates: any[];
  constructor(private dataSource: FinancialModelingPrepService) {
    this.history = [];
  }
  ngOnInit() {
    this.loadChart();
  }

  onChange(event) {
    this.loadChart(event.detail.value.substring(0, 7));
  }
  async getData() {
   await this.dataSource.getHistorical().then((res: any) => {
      this.history = res.historical;
    }).catch((e) => {
      console.log(e);
    });
   console.log('trying get data');
  }

  colorLabel(size) {
    var colors = [];
    for (let i = 0; i < size; i++) {
      colors.push('#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6));
    }
    return colors;
  }

  async loadChart(date = '') {
    var years = [];
    var closes = [];
    if (this.history[0] == null) {
      await this.getData();
      console.log('entro al if');
    }
    this.history.forEach((object) => {
      if (object.date.includes(date)) {
        years.push(object.date);
        closes.push(object.close);
      }
    });
    if (this.bars) {
      this.bars.destroy();
    }
    if (years.length !== 0) {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: years,
        datasets: [{
          label: '# of Views',
          data: closes,
          backgroundColor: this.colorLabel(years.length),
        borderColor: this.colorLabel(years.length),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
    }
  }
}
