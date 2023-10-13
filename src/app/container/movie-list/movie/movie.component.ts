import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() favoriteChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(public movieService: MovieService, public favoritesService: FavoritesService) {}

  toggleFavourite(movie: any): void {
    this.favoritesService.toggleFavourite(movie);
    this.favoriteChanged.emit();
  }
}
