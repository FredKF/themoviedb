import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';


const routes: Routes = [  
  {path:'movies', component: MovieListComponent},
  {path: '', redirectTo:'movies', pathMatch:'full'},
  {path:'movie/:id', component: MovieDetailComponent},
  {path:'tvshowsPopular', component: TvShowListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
