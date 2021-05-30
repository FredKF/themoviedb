import { Component, Input, OnInit } from '@angular/core';
import { PopularMoviesResponse } from 'src/app/models/movie-response.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() popularMovie: PopularMoviesResponse;
  constructor() { }
  ngOnInit(): void {  }
}
