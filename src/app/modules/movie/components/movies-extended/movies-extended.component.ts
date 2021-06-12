import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-extended',
  templateUrl: './movies-extended.component.html',
  styleUrls: ['./movies-extended.component.css']
})
export class MoviesExtendedComponent implements OnInit {

  moviesList: MoviesResponse [] = [];
  moco: string;
  constructor(private route: ActivatedRoute,
              private movieService: MovieService) { }

  // ngOnInit(): void {
  //   this.route.params.subscribe(params =>{
  //     this.moviesList = params.popularMovies;
  //   });
    
  // }  

  ngOnInit() {
    this.route.params.subscribe(params => {      
      this.moco = params.popularMovies;
      // var result = JSON.parse(params['popularMovies']);
      // this.moviesList = JSON.parse(params['popularMovies']);
    });
    console.log(this.moco);
    this.movieService.getMovies(this.moco).subscribe(
      res => {
        this.moviesList = res.results;
      }
    )    
  }

  // this.moviesList = JSON.parse(this.route.snapshot.paramMap.get('popularMovies'));
 
}
