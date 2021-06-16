import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/shared/search/search.component';
import { MoviesExtendedComponent } from './modules/movie/components/movies-extended/movies-extended.component';

const routes: Routes = [     
  {path: 'movies', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)},    
  {path: 'tvshows', loadChildren:()=>import('./modules/tv-show/tv-show.module').then(m => m.TvShowModule)},  
  {path: '', redirectTo:'movies', pathMatch:'full'},
  {path:'search/:query', component: SearchComponent },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],            
  exports: [RouterModule]
})
export class AppRoutingModule { }