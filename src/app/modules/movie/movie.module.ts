import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HeroComponent } from 'src/app/components/shared/hero/hero.component';
import { MoviesExtendedComponent } from './components/movies-extended/movies-extended.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from 'src/app/components/shared/search/search.component';

@NgModule({
  declarations: [
    HeroComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieListComponent,
    MoviesExtendedComponent,
    SearchComponent    
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class MovieModule { }
