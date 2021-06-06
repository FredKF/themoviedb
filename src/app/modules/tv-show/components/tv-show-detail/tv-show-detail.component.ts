import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowDetail } from 'src/app/models/tv-show-detail.interface';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {

  tvShowDetail: TvShowDetail;
  constructor(private route: ActivatedRoute,
              private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.tvShowsService.getTvShowDetails(params.id).subscribe(
        (res) => {
          this.tvShowDetail = res;
        },
        (error) => {
          console.error(error)
        });
    }); 
  }

}
