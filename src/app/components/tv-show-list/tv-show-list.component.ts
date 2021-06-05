import { Component, OnInit } from '@angular/core';
import { tvShowsResult } from 'src/app/models/tv-show-response.interface';
import { TvShowsService } from 'src/app/services/tv-shows.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  tvShows: tvShowsResult []=[];
  constructor(private tvShowsService : TvShowsService) { }

  ngOnInit(): void {
    this.tvShowsService.getLatest().subscribe(
      (res) =>{
        this.tvShows = res.results;    
      },
      (error) => {
        console.error(error)
      });
  }
}