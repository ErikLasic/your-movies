import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(public movieService: MovieService, public favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavoritesFromStorage();
  }

  updateFavourites(): void {
    this.favorites = this.favoritesService.getFavoritesFromStorage();
  }
}
