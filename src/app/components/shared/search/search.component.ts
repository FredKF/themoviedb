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
  hidden: boolean = true;
  keyword: string;
  searchPageIndex: number;
  datasource: MoviesResponse[];
  auxDataSource: MoviesResponse[];
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
    this.searchService.getSearchMovies(this.keyword,this.searchPageIndex.toString()).subscribe(
          res => {
            this.cleanDataSource(res.results);
            this.auxDataSource = res.results;
            if(res.results.length === 0){
              this.hidden = false;
            }
            this.getAllSearchData(res.total_pages);
          }
        )
     }

     getAllSearchData(totalPages: number): void{
      for(let index=1; index < totalPages; index ++){
        this.searchService.getSearchMovies(this.keyword,index.toString()).subscribe(
          response =>{    
            this.cleanDataSource(response.results);
            this.cleanDataSource(this.auxDataSource);
            this.datasource = this.auxDataSource.concat(response.results); 
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

  cleanDataSource(results: MoviesResponse[]): MoviesResponse[]{
    for(let result of results){
      if(this.elementContainsNull(result)){
        var filteredList = results.splice(results.indexOf(result),10);
      }
    }
    return filteredList;
  }

  elementContainsNull(result: MoviesResponse): boolean {  
    var nullValuesFound: number = 0; 
    for(var key in result){
      if(result[key] === null){
        nullValuesFound +=1;
      }      
    } 
    return nullValuesFound > 0;    
  }
}
