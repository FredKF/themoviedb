import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/shared/search/search.component';
import { MovieModule } from './modules/movie/movie.module';

const routes: Routes = [
  {path: 'movies', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)},
  {path: 'tvshows', loadChildren:()=>import('./modules/tv-show/tv-show.module').then(m => m.TvShowModule)},
  {path: '', redirectTo:'movies', pathMatch:'full'},
  {path:'search/:query/:searchType', component: SearchComponent }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
