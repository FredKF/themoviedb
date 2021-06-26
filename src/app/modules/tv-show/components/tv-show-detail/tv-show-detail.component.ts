import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TvShowDetail } from 'src/app/models/tv-show-detail.interface';
import { TvShowsService } from '../../services/tv-shows.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {
  tvShowDetail$: Observable<TvShowDetail>;
  constructor(private route: ActivatedRoute,
              private tvShowsService: TvShowsService,
              private location: Location) { }

    ngOnInit(): void {
      this.route.params.subscribe(params =>{
        this.tvShowDetail$ = this.tvShowsService.getTvShowDetails(params.id)
      });
    }
    goBack(){
      this.location.back()
    }
 }
