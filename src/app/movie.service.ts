import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/app/config';
import { HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = config.apiKey;
  apiUrl = config.apiUrl;

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getMoviePosterUrl(posterPath: string | null): string {
    if (posterPath) {
      const baseUrl = 'https://image.tmdb.org/t/p/w500';
      return `${baseUrl}${posterPath}`;
    } else {
      return 'assets/default_image.png';
    }
  }

  searchMoviesByTitle(title: string): Observable<any> {
    const apiKey = this.apiKey;
  
    if (title) {
      const apiUrl = `${this.apiUrl}/search/movie?api_key=${apiKey}&query=${title}`;
  
      return this.http.get(apiUrl);
    } else {
      return throwError('Please enter a search query.');
    }
  }

  getMovieGenres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}`);
  }
}
