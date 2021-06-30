import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MovieModule } from '../movie/movie.module';
import { TvShowModule } from '../tv-show/tv-show.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MovieModule,
    TvShowModule
  ]
})
export class SearchModule { }
