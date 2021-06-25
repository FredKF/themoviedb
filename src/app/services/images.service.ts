import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ImageRootObject } from '../models/images.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }

  getMovieImages(id: string): Observable<ImageRootObject>{
    return this.httpClient.get<ImageRootObject>(`https://api.themoviedb.org/3/movie/${id}/images?api_key=82818e8e08f0fd22cb882c56c7a579fc&language=en-US&include_image_language=en`);
  }
}
