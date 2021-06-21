import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { LatestRootObject } from 'src/app/models/movie-latest.interface';
import { MovieRootObject, MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { GenreRootObject, Genre } from 'src/app/models/movie-genres.interface';
import { CheckboxComponent } from 'src/app/components/shared/checkbox/checkbox.component';

@Component({
  selector: 'app-movies-extended',
  templateUrl: './movies-extended.component.html',
  styleUrls: ['./movies-extended.component.css']
})
export class MoviesExtendedComponent implements OnInit {
  pageEvent: PageEvent;
  searchPageEvent: PageEvent;
  datasource: MoviesResponse[];
  latest: LatestRootObject;
  pageIndex:number;
  searchPageIndex:number;
  pageSize:number;
  length:number;
  moviesList: MoviesResponse [] = [];
  moviesRoot: MovieRootObject;
  movieType: string;
  currentIndex:number;
  keyword: string = '';
  IsSearch: boolean = false;
  searchQuery: string;
  latestId: number;
  mainTitle: string;
  isvalidForm: boolean = false;
  form: FormGroup;
  genres: GenreRootObject;
  gender: Genre[] = [];
  genresNames: string[];
  genresIds: string[] = [];
  checked: false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService
              ) {
                this.route.paramMap.subscribe(params => {
                  if(params){
                  this.ngOnInit();
                  }
              });
             }

  ngOnInit() {
    this.populateGenders();
    this.getLatest();
    this.route.params.subscribe(params => {
      this.movieType = params.movieType;
    });

    this.movieService.getMovies(this.movieType).subscribe(
      res => {
        this.datasource = res.results;
        this.pageSize= res.results.length;
        this.length = res.total_results;
        this.mainTitle = this. getMainTitle(this.movieType);
      }
    )
 }

 getServerData(pageEvent:PageEvent, keyword: string): PageEvent{
  this.currentIndex = pageEvent.pageIndex;
  pageEvent.pageIndex +=1;

  this.movieService.getMoviesPag(this.movieType, pageEvent.pageIndex.toString()).subscribe(
    res =>{
        this.datasource = res.results;
        this.pageIndex = this.currentIndex;
        this.length = res.total_results;
        this.pageSize= res.results.length;
      },
    error =>{
      console.log(error);
    }
  );
  return pageEvent;
 }

 getLatest(){
  this.movieService.getLatest().subscribe(
    res => {
      this.latest = res;
      this.latestId = this.latest.id;
    }
  )
 }

  sortTopTen(){
    this.datasource.sort((movie, nextMovie) => movie.popularity < nextMovie.popularity ? 1 : -1);
    var sortedList = this.datasource.slice(0, 10);
    this.datasource = sortedList;
  }

  getMainTitle(movieType: string): string{
    switch(movieType) {
      case "popular": {
        return "Popular";
      }
      case "top_rated": {
         return "Top Rated";
      }
      case "now_playing": {
        return "Now Playing";
     }
     case "upcoming":{
       return "Upcoming";
     }
      default: {
         return "Movies";
      }
   }
  }

  navigateToSearchComponent(){
    if(this.keyword){
      this.router.navigateByUrl(`/search/${this.keyword}`);
    }
  }

  populateGenders() : void{
    this.movieService.getGenres().subscribe(
      res =>{
        this.genres = res;        
        if(this.genres) this.genresNames = this.getGenresDescription(this.genres);        
      }
    )
  }

  getGenresDescription(genres: GenreRootObject): string[]{
    let selectedGenres = genres.genres.map(({ name }) => name);    
    return selectedGenres;
  }

  getGenresIds(genres: GenreRootObject): number[]{
    let selectedGenresIds = genres.genres.map(({ id }) => id);
    return selectedGenresIds;
  }

  onCheckChange(event){    
    var and = '&'    
    if(this.genresIds.length > 0){
      this.genresIds.push(and + event.source.id.toString());
    }else{
      this.genresIds.push(event.source.id.toString());
    }   
  }

  filterByGenres(){
    this.movieService.getGenresById(this.genresIds).subscribe(
      res =>{
        this.datasource = res.results;        
        this.length = res.total_results;
        this.pageSize= res.results.length;               
      }
    )
    this.genresIds = [];
  }
}
