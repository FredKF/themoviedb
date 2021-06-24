import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowRoutingModule } from './tv-show-routing.module';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TvShowListComponent,
    TvShowItemComponent,
    TvShowDetailComponent],
  imports: [
    CommonModule,
    TvShowRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class TvShowModule { }
