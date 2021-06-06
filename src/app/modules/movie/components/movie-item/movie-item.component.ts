import { Component, Input, OnInit } from '@angular/core';
import { MoviesResponse } from 'src/app/models/movie-response.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: MoviesResponse;  
  constructor() { }
  ngOnInit(): void {  }
}
