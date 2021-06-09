import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../../../models/movie-response.interface';
import { MovieDetails } from '../../../models/movie-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient : HttpClient) { }

  getPopularMovies(): Observable<RootObject>{
    return this.httpClient.get<RootObject>('https://api.themoviedb.org/3/movie/popular?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=100');
  }

  getTopRated(): Observable<RootObject>{
    return this.httpClient.get<RootObject>('https://api.themoviedb.org/3/movie/top_rated?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1');
  }

  getUpcommingMovies(): Observable<RootObject>{
    return this.httpClient.get<RootObject>('https://api.themoviedb.org/3/movie/upcoming?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1');
  }

  getMovieDetails(id: string): Observable<MovieDetails>{
    return this.httpClient.get<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US`);
  }
}
