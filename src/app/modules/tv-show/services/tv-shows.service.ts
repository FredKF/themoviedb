import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TvShowDetail } from 'src/app/models/tv-show-detail.interface';
import { RootTvShow } from '../../../models/tv-show-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private httpClient: HttpClient) { }
  
  getLatest(): Observable<RootTvShow>{
    return this.httpClient.get<RootTvShow>('https://api.themoviedb.org/3/tv/popular?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1')
  } 

  getTvShowDetails(id: string): Observable<TvShowDetail> {
    return this.httpClient.get<TvShowDetail>(`https://api.themoviedb.org/3/tv/${id}?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US`);    
  }
}