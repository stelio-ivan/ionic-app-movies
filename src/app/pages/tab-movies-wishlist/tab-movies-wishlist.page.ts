import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { MovieProviderService } from '../../services/movie-provider.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-tab-movies-wishlist',
  templateUrl: 'tab-movies-wishlist.page.html',
  styleUrls: ['tab-movies-wishlist.page.scss']
})
export class TabMoviesWishlistPage {

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
    console.log("Filtering movies on wishlist");
    this.movies = this.moviesProvider.getMovies().filter((movie) => {
      // return true if watched flag is true, show and not filter
      return movie.wished;
    });
  }
}
