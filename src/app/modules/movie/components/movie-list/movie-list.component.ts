import { Component, OnInit } from '@angular/core';
import { MovieType } from 'src/app/enums/moive-type.enum';
import { MovieRootObject, MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from 'src/app/modules/movie/services/movie.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  popularRoot: MovieRootObject;
  popularMovies: MoviesResponse [] = [];
  topRatedMovies: MoviesResponse [] = [];
  upcomingMovies: MoviesResponse [] = [];  
  list: MoviesResponse[] = [];
  movieTypes: string[];  
  linkTitle: string;

  constructor(private movieService: MovieService,
              private helper: HelperService ) { }  

  ngOnInit(): void {    
    this.movieTypes = this.helper.getHomeMovieTypes();
    this.movieTypes.forEach(movieType => {
      this.getMovieList(movieType)
    });
  }

  getMovieList(movieType: string){
    this.movieService.getMovies(movieType).subscribe(
      (res) =>{
        if(movieType == MovieType.popular ){
          this.popularMovies = res.results;
        }
        if(movieType == MovieType.top_rated ){
          this.topRatedMovies = res.results;
        }
        if(movieType == MovieType.upcoming){
          this.upcomingMovies = res.results;
        }        
      },
      (error) => {
        console.error(error);
     });     
  }
  
  getLinkTitle(movieType: string): string{
    return this.helper.getLinkTitle(movieType);
  }
}
