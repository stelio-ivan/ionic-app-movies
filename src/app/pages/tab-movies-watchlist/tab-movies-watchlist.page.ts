import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { MovieProviderService } from '../../services/movie-provider.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-tab-movies-watchlist',
  templateUrl: 'tab-movies-watchlist.page.html',
  styleUrls: ['tab-movies-watchlist.page.scss']
})
export class TabMoviesWatchlistPage {

  public movies: Array<Movie>;

  constructor(private moviesProvider: MovieProviderService, private events : Events) { }

  ngOnInit() {
    // Filter data
    this.filterMovieData();
    // Subscribe data changes to reapply filter
    this.events.subscribe('movie-data-changed', () => {
      this.filterMovieData();
    });
  }

  filterMovieData() {
    // TO DO Implement filter on data
  }
}
