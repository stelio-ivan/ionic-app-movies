import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'add-movie', loadChildren: './pages/add-movie/add-movie.module#AddMoviePageModule' },
  { path: 'movie-detail/:id', loadChildren: './pages/movie-detail/movie-detail.module#MovieDetailPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// Ionic 4 has a new Routing read about it at https://blog.ionicframework.com/navigating-the-change-with-ionic-4-and-angular-router/
