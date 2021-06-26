import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from 'src/app/components/shared/search/search.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';

const routes: Routes = [
  {path:'', component: TvShowListComponent},
  {path:':id', component: TvShowDetailComponent},
  {path:'tv-show-list/:tvShowType', component: TvShowListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }
