import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { MovieProviderService } from '../../services/movie-provider.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  private movieUuid : string;
  public movie: Movie;

  constructor(private activatedRoute: ActivatedRoute, private moviesProvider: MovieProviderService, private events: Events) { }

  ngOnInit() {
    // Get parameter called 'id' from query string
    this.movieUuid = this.activatedRoute.snapshot.params.id;
    this.movie = this.moviesProvider.getMovie(this.movieUuid);
    // Subscribe data changes to fetch item again (this is needed to wait for data to load if opening screen directly)
    this.events.subscribe('movie-data-changed', () => {
      this.movie = this.moviesProvider.getMovie(this.movieUuid);
    });
  }

  toggleChanged() {
    console.log("Movie '" + this.movie.title + "' " + (this.movie.wished?"in wishlist":"not in wishlist") + " and " + (this.movie.watched?"in watchlist":"not in watchlist"));
    // Publish change to movie data
    // TO DO notify data change
  }
}
