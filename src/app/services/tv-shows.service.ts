import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootTvShow } from '../models/tv-show-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private httpClient: HttpClient) { }
  
  getLatest(){
    return this.httpClient.get<RootTvShow>('https://api.themoviedb.org/3/tv/popular?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&page=1')
  } 
}
