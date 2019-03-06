import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-movies-search',
        children: [
          {
            path: '',
            loadChildren: '../tab-movies-search/tab-movies-search.module#TabMoviesSearchPageModule'
          }
        ]
      },
      {
        path: 'tab-movies-wishlist',
        children: [
          {
            path: '',
            loadChildren: '../tab-movies-wishlist/tab-movies-wishlist.module#TabMoviesWishlistPageModule'
          }
        ]
      },
      {
        path: 'tab-movies-watchlist',
        children: [
          {
            path: '',
            loadChildren: '../tab-movies-watchlist/tab-movies-watchlist.module#TabMoviesWatchlistPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-movies-search',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab-movies-search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
