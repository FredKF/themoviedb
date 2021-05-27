import { Component, OnInit } from '@angular/core';
import { PopularMoviesResponse, RootObject } from 'src/app/models/movie-response.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  popularMovies: PopularMoviesResponse [] =[];

  constructor(private movieService: MovieService ) { }

  ngOnInit(): void {

    this.movieService.getPopularMovies().subscribe(
      (res) =>{
        this.popularMovies = res.results;
        console.log(res);
      },
      (error) => {
        console.error(error)
      });
  }
}
