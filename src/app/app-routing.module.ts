import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [     
  {path: 'movies', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)},  
  {path: 'movies/:id', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)},
  {path: 'tvshows', loadChildren:()=>import('./modules/tv-show/tv-show.module').then(m => m.TvShowModule)},
  {path: 'tvshows/:id', loadChildren:()=>import('./modules/tv-show/tv-show.module').then(m => m.TvShowModule)},
  {path: '', redirectTo:'movies', pathMatch:'full'}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],            
  exports: [RouterModule]
})
export class AppRoutingModule { }