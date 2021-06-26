import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MoviesResponse } from 'src/app/models/movie-response.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { FormGroup} from '@angular/forms';
import { GenreRootObject } from 'src/app/models/movie-genres.interface';
import { ViewChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-movies-extended',
  templateUrl: './movies-extended.component.html',
  styleUrls: ['./movies-extended.component.css']
})
export class MoviesExtendedComponent implements OnInit {
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  pageEvent: PageEvent;
  datasource: MoviesResponse[];
  pageIndex: number;
  pageSize:number;
  length: number;
  movieType: string;
  currentIndex: number;
  keyword: string = '';
  mainTitle: string;
  form: FormGroup;
  genresRoot: GenreRootObject;
  genresNames: string[];
  genresIds: string[] = [];
  hidden: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService,
              private helper: HelperService
              ) {
                this.route.paramMap.subscribe(params => {
                  if(params){
                  this.ngOnInit(); //recharges the current component
                  }
              });
             }

  ngOnInit() {
    this.hidden = false;
    this.populateGenders();
    this.route.params.subscribe(params => {
      this.movieType = params.movieType;
    });

    this.movieService.getMovies(this.movieType).subscribe(
      res => {
        this.datasource = res.results;
        this.pageSize= res.results.length;
        this.length = res.total_results;
        this.mainTitle = this.helper.getMainTitle(this.movieType);
      }
    )
 }

 getServerData(pageEvent:PageEvent): PageEvent{
  this.hidden = false;
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

  sortTopTen(){
    this.hidden = true;
    this.datasource.sort((movie, nextMovie) => movie.popularity < nextMovie.popularity ? 1 : -1);
    var sortedList = this.datasource.slice(0, 10);
    this.datasource = sortedList;
  } 

  navigateToSearchComponent(){
    if(this.keyword){
      this.router.navigateByUrl(`/search/${this.keyword}/movies`);
    }
  }

  populateGenders() : void{
    this.movieService.getGenres().subscribe(
      res =>{
        this.genresRoot = res;
        if(this.genresRoot) this.genresNames = this.getGenresDescription(this.genresRoot);
      }
    )
  }

  getGenresDescription(genres: GenreRootObject): string[]{
    let selectedGenres = genres.genres.map(({ name }) => name);
    return selectedGenres;
  }

  onCheckChange(event){
    if(this.genresIds.length > 0){
      this.genresIds.push('&' + event.target.id.toString());
    }else{
      this.genresIds.push(event.target.id.toString());
    }
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
  }

  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked  = false;
    });
    this.ngOnInit();
  }
}
