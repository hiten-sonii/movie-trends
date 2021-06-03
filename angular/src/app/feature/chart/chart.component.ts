import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('movieChart') movieChart: ElementRef;

  ngOnInit(): void {
  }

  charts: Array<{
    title: string,
    type: string,
    data: Array<any>,
    columnNames?: Array<string>,
    options?: {};
  }> = [];

  @ViewChild('chart')
  chart: GoogleChartComponent;
  chartOptions: any = {
    vAxis: {
      minValue: 0,
      maxValue: 400
    }
  };

  constructor(private router: Router) {
    this.charts.push({
      title: 'Line Chart',
      type: 'LineChart',
      data: [
        ['Apr 19', 21],
        ['May 19', 15],
        ['June 19', 17],
        ['July 19', 19]
      ],
    });
    console.log(this.charts);
  }

}
