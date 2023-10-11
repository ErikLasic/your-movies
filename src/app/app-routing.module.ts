import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { FavouritesComponent } from './container/favourites/favourites.component';
import { MovieSearchComponent } from './container/movie-search/movie-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ContainerComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'search', component: MovieSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
