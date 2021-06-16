import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MoviesResponse } from 'src/app/models/movie-response.interface';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;
  searchPageIndex: number;
  datasource: MoviesResponse[];
  pageEvent: PageEvent;
  pageIndex:number;
  pageSize:number;
  length:number;
  movieType: string;
  currentIndex:number;

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.keyword = params.query;
      this.searchPageIndex = 1;
    });
    this.searchService.getSearchResults(this.keyword,this.searchPageIndex.toString()).subscribe(
      res => {
        this.datasource = this.cleanDataSource(res.results);
        this.pageSize= res.results.length;
        this.length = res.total_results;
      }
    )
  }


  getFilteredData(pageEvent:PageEvent): PageEvent{
    this.currentIndex = pageEvent.pageIndex;
    pageEvent.pageIndex +=1;

    this.searchService.getSearchResults(this.keyword, pageEvent.pageIndex.toString()).subscribe(
      response =>{
        this.datasource = this.cleanDataSource(response.results);
        this.pageIndex = this.currentIndex;
        this.length = response.total_results;
        this.pageSize= response.results.length;
    },
    error=>{
      console.log(error);
    }
  );
  return pageEvent;
 }

  cleanDataSource(results: MoviesResponse[]): MoviesResponse[]{
    results.forEach(result => {
      if(this.elementContainsNull(result)){
        results.splice(results.indexOf(result),1);
        }
    });

    return results;
  }

  elementContainsNull(result: MoviesResponse): boolean {
    return Object.values(result).every(x => (x === null || x === '')) ? true : false;
    // return result.backdrop_path === null ?  true : false
  }

}
