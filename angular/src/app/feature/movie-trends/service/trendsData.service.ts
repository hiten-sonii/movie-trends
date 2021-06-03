import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UrlConstants } from 'src/app/constants/url.constant';
@Injectable({
  providedIn: 'root'
})
export class TrendsDataService {

  trendDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  trendData$: Observable<any> = this.trendDataSubject.asObservable();

  getTrendsData(queryString) {
    this.httpClient.get(`${UrlConstants.serverUrl}/${queryString}`)
      .subscribe(result => {
        this.trendDataSubject.next(result);
      });
  }

  constructor(private httpClient: HttpClient) {
  }
}
