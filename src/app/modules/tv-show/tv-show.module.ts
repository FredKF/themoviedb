import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowRoutingModule } from './tv-show-routing.module';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TvShowListComponent,
    TvShowItemComponent,
    TvShowDetailComponent
  ],
  imports: [
    TvShowRoutingModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatButtonModule,
    SharedModule,
    CommonModule
  ],
  exports: [TvShowItemComponent]
})
export class TvShowModule { }
