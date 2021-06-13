import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieRootObject } from '../models/movie-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResult: MovieRootObject;
  constructor(private httpClient: HttpClient) { }

  getSearchResults(keyword: string): Observable<MovieRootObject>{
    return this.httpClient.get<MovieRootObject>(`https://api.themoviedb.org/3/search/tv?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1&query=${keyword}&include_adult=false`);    
  }
}