import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/components/shared/search/search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesExtendedComponent } from './components/movies-extended/movies-extended.component';

const routes: Routes = [
  {path:'', component: MovieListComponent},
  {path:':id', component: MovieDetailComponent},
  {path:'movies-extended/:movieType', component: MoviesExtendedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
