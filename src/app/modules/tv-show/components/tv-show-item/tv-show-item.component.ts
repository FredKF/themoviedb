import { Component, Input, OnInit } from '@angular/core';
import { TvShowsResult } from 'src/app/models/tv-show-response.interface';

@Component({
  selector: 'app-tv-show-item',
  templateUrl: './tv-show-item.component.html',
  styleUrls: ['./tv-show-item.component.css']
})
export class TvShowItemComponent implements OnInit {
  @Input() tvShow: TvShowsResult;
  constructor() { }

  ngOnInit(): void {
  }

}
