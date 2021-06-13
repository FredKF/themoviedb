import { Component, OnInit } from '@angular/core';
import { MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from 'src/app/modules/movie/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  popularMovies: MoviesResponse [] = [];
  topRatedMovies: MoviesResponse [] = [];
  upcomingMovies: MoviesResponse [] = [];
  list: MoviesResponse[] = [];

  movieTypes: string[] = ["popular", "top_rated", "upcoming"];
  
  constructor(private movieService: MovieService ) { }  

  ngOnInit(): void {      
    this.movieTypes.forEach(movieType => {
      this.getMovieList(movieType)
    });    
  }

  getMovieList(movieType: string){
    this.movieService.getMovies(movieType).subscribe(
      (res) =>{
        if(movieType == "popular"){
          this.popularMovies = res.results;
        }
        if(movieType == "top_rated"){
          this.topRatedMovies = res.results;
        }
        if(movieType == "upcoming"){
          this.upcomingMovies = res.results;
        }        
      },
      (error) => {
        console.error(error);
     });
     
  }
  
  getLinkTitle(movieType: string): string{
    switch(movieType) { 
      case "popular": {         
        return "Popular";         
      } 
      case "top_rated": {
         return "Top Rated";
      } 
      case "upcoming": {    
        return "Upcoming";
     } 
      default: {          
         return "";
      } 
   } 
  }
}
