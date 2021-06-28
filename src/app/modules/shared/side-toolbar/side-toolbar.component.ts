import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { GenreRootObject } from 'src/app/models/movie-genres.interface';
import { MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from 'src/app/modules/movie/services/movie.service';


@Component({
  selector: 'app-side-toolbar',
  templateUrl: './side-toolbar.component.html',
  styleUrls: ['./side-toolbar.component.css']
})
export class SideToolbarComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  @ViewChild(MatExpansionPanel) expansion: MatExpansionPanel;
  keyword: string;
  hidden:boolean = false;
  genresIds: string[] = [];
  datasource: MoviesResponse[];
  length: number;
  pageSize: number;
  expanded: boolean = false;
  genresRoot: GenreRootObject;
  mainTitle: string;
  constructor(private router: Router,
              private movieService: MovieService) { }

  ngOnInit(): void {
  }

  navigateToSearchComponent(){
    if(this.keyword){
      this.router.navigateByUrl(`/search/${this.keyword}/movies`);
    }
  }

  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked  = false;
    });
    this.ngOnInit();
  }

  filterByGenres(){
    this.hidden = true;
    this.movieService.getGenresById(this.genresIds).subscribe(
      res =>{
        this.datasource = res.results;
        this.length = res.total_results;
        this.pageSize= res.results.length;
      }
    )
    this.genresIds = [];
    this.expansion.close();
  }

  sortTopTen(){
    this.hidden = true;
    this.datasource.sort((movie, nextMovie) => movie.popularity < nextMovie.popularity ? 1 : -1);
    var sortedList = this.datasource.slice(0, 10);
    this.datasource = sortedList;
    this.mainTitle = "Top 10";
  }

}
