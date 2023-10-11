import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MovieService } from 'src/app/movie.service';
import { FavoritesService } from 'src/app/favorites.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers: [DatePipe],
})
export class MovieComponent {
  @Input() movie!: any;

  constructor(public movieService: MovieService, public favoritesService: FavoritesService) {}

  toggleFavourite(movie: any): void {
    this.favoritesService.toggleFavourite(movie);
  }
}
