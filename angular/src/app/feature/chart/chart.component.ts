import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @ViewChild('movieChart') movieChart: ElementRef;

  ngOnInit(): void {
  }

  @Input() chartData;

  chartOptions: any = {
    vAxis: {
      minValue: 0,
      maxValue: 400
    }
  };

  constructor(private router: Router) {
  }
}
