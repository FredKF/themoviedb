import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieRootObject } from '../../../models/movie-response.interface';
import { MovieDetails } from '../../../models/movie-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient : HttpClient) { }

  getMovies(movieType: string): Observable<MovieRootObject>{
    return this.httpClient.get<MovieRootObject>(`https://api.themoviedb.org/3/movie/${movieType}?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1`);
  } 

  getMoviesPag(movieType: string, pageNumber: string): Observable<MovieRootObject>{
    return this.httpClient.get<MovieRootObject>(`https://api.themoviedb.org/3/movie/${movieType}?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=${pageNumber}`);
  } 

  getMovieDetails(id: string): Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US`);
  }
}
