import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';

const routes: Routes = [    
  {path:'tvshows', component: TvShowListComponent},
  {path: '', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)},  
  {path: ':id', loadChildren:()=>import('./modules/movie/movie.module').then(m => m.MovieModule)}  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
