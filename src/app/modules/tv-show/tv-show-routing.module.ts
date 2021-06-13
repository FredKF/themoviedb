import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';

const routes: Routes = [
  {path:'', component: TvShowListComponent},  
  {path:':id', component: TvShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }