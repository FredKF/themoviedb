import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import {Location} from '@angular/common';
import { RootTvShow, TvShowsResult } from 'src/app/models/tv-show-response.interface';
import { MovieRootObject, MoviesResponse } from 'src/app/models/movie-response.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hidden: boolean = true;
  keyword: string;
  searchPageIndex: number;
  datasource: any[]=[];
  auxDataSource: any[];
  pageEvent: PageEvent;
  pageIndex:number;
  pageSize:number;
  length:number;
  movieType: string;
  currentIndex:number;
  searchType: string;
  isMovieSearch: boolean = false;

  constructor(private searchService: SearchService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keyword = params.query;
      this.searchType = params.searchType;
      this.searchPageIndex = 1;
    });

    if(this.searchType ==='movies'){
      this.isMovieSearch = true;
    }

      this.searchService.getSearchResults(this.keyword,this.searchPageIndex.toString(), this.searchType).subscribe(
        res => {
          this.cleanDataSource(res.results);
          this.auxDataSource = res.results;
          if(res.results.length === 0){
            this.hidden = false;
          }
          this.getAllSearchData(res.total_pages, this.searchType);
        }
      )   
     }

     getAllSearchData(totalPages: number, searchType: string): void{

      for(let index=1; index <= totalPages; index ++){
        this.searchService.getSearchResults(this.keyword,index.toString(), searchType).subscribe(
          response =>{
            this.cleanDataSource(response.results);
            this.cleanDataSource(this.auxDataSource);
            this.datasource=this.auxDataSource.concat(response.results);
            this.pageIndex = this.currentIndex;
            this.length = response.total_results;
            this.pageSize= response.results.length;
        },
        error=>{
          console.log(error);
        }
      );
      }
   }

  cleanDataSource(results: any[]): any[]{
    for(let result of results){
      if(this.elementContainsNull(result)){
        var filteredList = results.splice(results.indexOf(result),10);
      }
    }
    return filteredList;
  }

  elementContainsNull(result: any): boolean {
    var nullValuesFound: number = 0;
    for(var key in result){
      if(result[key] === null){
        nullValuesFound +=1;
      }
    }
    return nullValuesFound > 0;
  }

  goBack(){
    this.location.back()
  }
}
