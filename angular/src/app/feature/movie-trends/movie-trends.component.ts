import { Component, OnInit } from '@angular/core';
import { TrendsDataService } from './trendsData.service';

@Component({
  selector: 'app-movie-trends',
  templateUrl: './movie-trends.component.html',
  styleUrls: ['./movie-trends.component.css']
})
export class MovieTrendsComponent implements OnInit {

  constructor(public trendsDataService: TrendsDataService) { }

  selectedChartOption;
  selectedChartData;
  ngOnInit(): void {
  }

  changeSelectedChart(option) {
    this.selectedChartOption = option;
  }

}
