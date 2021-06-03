import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendsDataService {

  chartOptions = [
    { title: 'Top rated movies', url: 'topRatedMovies' },
    { title: 'Top rated genres', url: 'topRatedGenres' },
    { title: 'Top metascore movies', url: 'topRatedMovies' },
    { title: 'Highest grossing years', url: 'topRatedMovies' },
  ];

  constructor() {

  }
}
