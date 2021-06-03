import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './feature/chart/chart.component';
import { MovieTrendsComponent } from './feature/movie-trends/movie-trends.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    MovieTrendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule.forRoot({ version: 'current' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
