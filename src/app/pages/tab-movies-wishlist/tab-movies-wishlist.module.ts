import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabMoviesWishlistPage } from './tab-movies-wishlist.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabMoviesWishlistPage }])
  ],
  declarations: [TabMoviesWishlistPage]
})
export class TabMoviesWishlistPageModule {}
