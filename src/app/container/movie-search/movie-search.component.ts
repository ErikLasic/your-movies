import { Component } from '@angular/core';
import { FavoritesService } from 'src/app/favorites.service';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  genres: any[] = [];
  selectedGenre: number | null = null;

  constructor(public movieService: MovieService, public favoritesService: FavoritesService) {
    this.loadGenres();
  }

  loadGenres() {
    this.movieService.getMovieGenres().subscribe({
      next: (data) => {
        this.genres = data.genres;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  

  onGenreSelect() {
    if (this.selectedGenre) {
      this.movieService.getMoviesByGenre(this.selectedGenre).subscribe({
        next: (data) => {
          this.searchResults = data.results;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  searchMovies(title: string) {
    this.movieService.searchMoviesByTitle(title).subscribe({
      next: (data) => {
        this.searchResults = data.results;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
  

  toggleFavourite(movie: any): void {
    this.favoritesService.toggleFavourite(movie);
  }

  clearInput() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  clearGenre() {
    this.selectedGenre = null;
    this.searchResults = [];
  }
  
}
