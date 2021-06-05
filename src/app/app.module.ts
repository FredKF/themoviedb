import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './components/shared/hero/hero.component';
import { TvShowListComponent } from './components/tv-show-list/tv-show-list.component';
import { TvShowItemComponent } from './components/tv-show-item/tv-show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieItemComponent,
    MovieDetailComponent,
    MovieListComponent,
    HeroComponent,
    TvShowListComponent,
    TvShowItemComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
