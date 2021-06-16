import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MovieRootObject, MoviesResponse } from 'src/app/models/movie-response.interface';
import { SearchService } from 'src/app/services/search.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-extended',
  templateUrl: './movies-extended.component.html',
  styleUrls: ['./movies-extended.component.css']
})
export class MoviesExtendedComponent implements OnInit {
  pageEvent: PageEvent;
  searchPageEvent: PageEvent;
  datasource: MoviesResponse[];
  pageIndex:number;
  searchPageIndex:number;
  pageSize:number;
  length:number;
  moviesList: MoviesResponse [] = [];
  moviesRoot: MovieRootObject;
  movieType: string;
  currentIndex:number;    
  keyword: string;
  IsSearch: boolean = false;
  searchQuery: string;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private searchService: SearchService
               ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {      
      this.movieType = params.movieType;      
    });
    this.movieService.getMovies(this.movieType).subscribe(
      res => {             
        this.datasource = res.results;        
        this.pageSize= res.results.length;
        this.length = res.total_results;
      } 
    )   
    if(this.moviesList.length > 0) this.getServerData(null,null);
 } 

 getServerData(pageEvent:PageEvent, keyword: string): PageEvent{    
  if(this.IsSearch){
    this.getFilteredData(keyword);
  }
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

 getFilteredData(keyword: string){
  this.searchPageIndex = 1;
  this.IsSearch = true;
  this.searchQuery = keyword;

  this.searchService.getSearchResults(keyword,this.searchPageIndex.toString()).subscribe(
    response =>{
      this.datasource = response.results;
      this.pageIndex = this.currentIndex;
      this.length = response.total_results;
      this.pageSize= response.results.length;        
  },
  error=>{
    console.log(error);
  }
);
}

  sortTopTen(){    
    this.datasource.sort((movie, nextMovie) => movie.popularity < nextMovie.popularity ? 1 : -1);
    var sortedList = this.datasource.slice(0, 10);
    this.datasource = sortedList;    
  } 
}