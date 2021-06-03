import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TrendsDataService } from './trendsData.service';
import { ChartQueryConstants } from '../../constants/chartQueries.constant';

@Component({
  selector: 'app-movie-trends',
  templateUrl: './movie-trends.component.html',
  styleUrls: ['./movie-trends.component.css']
})
export class MovieTrendsComponent implements OnInit, AfterViewInit {

  constructor(public trendsDataService: TrendsDataService) { }

  chartQueryOptions = ChartQueryConstants.options;

  selectedChartOption;
  selectedChartData;
  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  changeSelectedChart(option) {
    this.selectedChartOption = option;
  }

}
