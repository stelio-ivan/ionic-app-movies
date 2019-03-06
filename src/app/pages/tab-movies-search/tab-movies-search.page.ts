import { Component } from '@angular/core';
import { Events } from '@ionic/angular';
import { MovieProviderService } from '../../services/movie-provider.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-tab-movies-search',
  templateUrl: 'tab-movies-search.page.html',
  styleUrls: ['tab-movies-search.page.scss']
})
export class TabMoviesSearchPage {

  public movies: Array<Movie>;

  constructor(private moviesProvider: MovieProviderService, private events : Events) { }

  ngOnInit() {
    this.movies = this.moviesProvider.getMovies();
  }

  toggleWished(movie: Movie) {
    // Log operation with ternary operator for correct operation logging
    console.log("Movie '" + movie.title + "' " + (movie.wished?"removed":"added") + " to wishlist.");
    // Toggle wish field
    // TO DO change movie.wished
    // Notify change in wishlist
    this.moviesProvider.notifyDataChange();
  }

  toggleWatched(movie: Movie) {
    // Log operation with ternary operator for correct operation logging
    console.log("Movie '" + movie.title + "' " + (movie.watched?"removed":"added") + " to watchlist.");
    // Toggle watched field
    // TO DO change movie.watched
    // Notify change in watchlist
    this.moviesProvider.notifyDataChange();
  }

  onSearchInputChanged(event: any) {
    // get the value of the searchbar and log it
    let searchQuery = event.target.value;
    console.log("Searching movies with query '" + searchQuery + "'");

    // if the value is an empty string don't filter the items
    if (searchQuery && searchQuery.trim() != '') {
      this.movies = this.moviesProvider.getMovies().filter((movie) => {
        return (movie.title.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1);
      })
    }
    // Reset list is search query is cleared
    else {
      this.movies = this.moviesProvider.getMovies();
    }
  }

}
