import { Component, OnInit } from '@angular/core';
import { NavController, ToastController} from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieProviderService } from '../../services/movie-provider.service';
import { Movie } from '../../model/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  constructor(private moviesProvider: MovieProviderService, private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() { }

  saveMovie(movieForm: any) {
    // Validate form
    if(movieForm.invalid){
      console.log("Error on Form!")
      this.presentToast("Error on Form!");
    }
    else {
      console.log("Valid form submitted.");
      // Create movie object
      let newMovie = new Movie(
        this.moviesProvider.genMovieUuid(movieForm.value.title, movieForm.value.year),
        movieForm.value.title,
        movieForm.value.thumb,
        movieForm.value.photo,
        movieForm.value.year,
        movieForm.value.sinopse,
        movieForm.value.director,
        movieForm.value.runtime,
        movieForm.value.stars,
        movieForm.value.genre,
        false,
        false
      );
      // Save movie in provider and publish change
      this.moviesProvider.save(newMovie);
      this.moviesProvider.notifyDataChange();

      // Show notification and log
      console.log("Movie '" + newMovie.title + "' Saved!")
      this.presentToast("Movie '" + newMovie.title + "' Saved!");
      // Go back to previous screen
      this.navCtrl.back();
    }
  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'top',
      duration: 3000,
      color: 'secondary'
    });
    toast.present();
  }

}
