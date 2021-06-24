import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieRootObject } from '../models/movie-response.interface';
import { RootTvShow } from '../models/tv-show-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResult: MovieRootObject;
  constructor(private httpClient: HttpClient) { }

  getSearchMovies(keyword: string, pageIndex: string): Observable<MovieRootObject>{    
    return this.httpClient.get<MovieRootObject>(`https://api.themoviedb.org/3/search/movie?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&query=${keyword}&page=${pageIndex}&include_adult=false`);
  }  

  getSearchTvShows(keyword: string, pageIndex: string): Observable<RootTvShow>{    
    return this.httpClient.get<RootTvShow>(`https://api.themoviedb.org/3/search/tv?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&query=${keyword}&page=${pageIndex}&include_adult=false`);
  }  
}