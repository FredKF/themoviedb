import { Component, OnInit } from '@angular/core';
import { MoviesResponse, RootObject } from 'src/app/models/movie-response.interface';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  popularMovies: MoviesResponse [] = [];
  topRatedMovies: MoviesResponse [] = [];
  upcommingMovies: MoviesResponse [] = [];
  
  constructor(private movieService: MovieService ) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(
      (res) =>{
        this.popularMovies = res.results;    
      },
      (error) => {
        console.error(error)
      });

    this.movieService.getTopRated().subscribe(
      (res) =>{
        this.topRatedMovies = res.results;    
      },
      (error) => {
        console.error(error)
      });

      this.movieService.getUpcommingMovies().subscribe(
        (res) =>{
          this.upcommingMovies = res.results;    
        },
        (error) => {
          console.error(error)
        });
  }
}
