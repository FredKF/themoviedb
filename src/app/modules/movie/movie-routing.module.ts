import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesExtendedComponent } from './components/movies-extended/movies-extended.component';

const routes: Routes = [
  {path:'', component: MovieListComponent},
  {path:':id', component: MovieDetailComponent},
  {path:'movies-extended/:popularMovies', component: MoviesExtendedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }