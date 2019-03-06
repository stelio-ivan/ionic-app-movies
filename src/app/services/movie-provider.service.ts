import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Events } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieProviderService {

  private movies: Array<Movie>;

  constructor(private http: Http, private events : Events) {
    this.movies = [];
  }


  public getMovie(movieUuid: string) {
    console.log("Searching movie with uuid = " + movieUuid + " in movie db with size " + this.getMovies().length);
    let movieFound = this.getMovies().find((movie) => {
      // return true if ids match
      return movie.uuid == movieUuid;
    });
    // log result and return
    if (movieFound) {
      console.log("Movie found '" + movieFound.title + "' for uuid = " + movieUuid);
    }
    else {
      console.log("Movie not found!");
    }
    return movieFound;
  }


  public getMovies() {
    // Lazy loading of data within object instance
    if (this.movies.length == 0) {
        this.loadData();
    }
    return this.movies;
  }

  public save(movie: Movie) {
    this.movies.push(movie);
    console.log("Movie '" + movie.title + "' saved in-memory!");
  }


  notifyDataChange() {
    // More info on how to use Events at https://ionicframework.com/docs/api/util/Events/
    this.events.publish('movie-data-changed');
    console.log("Publishing event 'movie-data-changed'");
  }


  loadData() {
    console.log("Loading Data from 'assets/data/movies.json'...");
   // Tutorial on HTTP Data Fetch https://www.joshmorony.com/using-http-to-fetch-remote-data-from-a-server-in-ionic-2/
   // Updated for use in Ionic 4 using pipe
   // Asynchronous call
   this.http.get('assets/data/movies.json').pipe(map(res => res.json())).subscribe(
     data => {
       for (let i=0; i < data.length; ++i) {
         this.movies.push(
           new Movie(data[i].uuid, data[i].title, data[i].thumb, data[i].photo, data[i].year, data[i].sinopse, data[i].director, data[i].runtime, data[i].stars, data[i].genre, data[i].watched, data[i].wishlist)
         );
       }
       console.log("Data loaded successfully.");
       this.notifyDataChange();
     },
     err => {
       console.log("Error Loading Data!");
     }
   );
 }

 public genMovieUuid(movieTitle: string, movieYear: number) {
   let uuid = this.uuid(movieTitle.length, movieYear);
   console.log("UUID generated: " + uuid);
   return uuid;
 }

 // Use external code https://gist.github.com/LeverOne/1308368 to generate random UUID
 uuid(a,b){for(b=a='';a++<36;b+=a*51&52?(a^15?8^Math.random()*(a^20?16:4):4).toString(16):'-');return b}

}
