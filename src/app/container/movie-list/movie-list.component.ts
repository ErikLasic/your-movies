import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  popularMovies: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe((data) => {
      this.popularMovies = data.results;
      console.log(this.popularMovies);
    });
  }
}
