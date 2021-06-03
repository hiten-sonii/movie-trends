import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTrendsComponent } from './movie-trends.component';

describe('MovieTrendsComponent', () => {
  let component: MovieTrendsComponent;
  let fixture: ComponentFixture<MovieTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
