import { Component, OnInit } from '@angular/core';
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

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {      
      this.keyword = params.query;      
      this.searchPageIndex = 1;
    });
    this.searchService.getSearchResults(this.keyword,this.searchPageIndex.toString()).subscribe(
      res => {             
        this.datasource = res.results;        
      } 
    ) 

  }

  getFilteredData(keyword: string){
    this.searchPageIndex = 1;

    this.searchService.getSearchResults(keyword,this.searchPageIndex.toString()).subscribe(
      response =>{
        // this.datasource = response.results;
        // this.pageIndex = this.currentIndex;
        // this.length = response.total_results;
        // this.pageSize= response.results.length;        
    },
    error=>{
      console.log(error);
    }
  );
 }

}
