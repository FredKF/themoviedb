import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowsResult } from 'src/app/models/tv-show-response.interface';
import { TvShowsService } from 'src/app/modules/tv-show/services/tv-shows.service';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css'],
})
export class TvShowListComponent implements OnInit {
  tvShows: any[];
  keyword: string;
  mainTitle: string;
  tvShowType: string;
  pageIndex: number;
  pageSize: number;
  length: number;
  pageEvent: PageEvent;
  currentIndex: number;
  
  constructor(
    private tvShowsService: TvShowsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      if(params){
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {  
    this.route.params.subscribe((params) => {
      this.tvShowType = params.tvShowType;
    });      
    this.tvShowsService.getTvShows(this.tvShowType).subscribe(
      (res) => {
        this.tvShows = res.results;
        this.length = res.total_results;
        this.pageSize= res.results.length;
      },
      (error) => {
        console.error(error);
      }
    );

    this.mainTitle = this.getMainTitle(this.tvShowType);
  }

  navigateToSearchComponent() {
    if (this.keyword) {
      this.router.navigateByUrl(`/search/${this.keyword}/tvShows`);
    }
  }

  getMainTitle(tvShowType: string): string {
    switch (tvShowType) {
      case 'popular': {
        return 'Popular';
      }
      case 'top_rated': {
        return 'Top Rated';
      }
      case 'on_the_air': {
        return 'On The Air';
      }
      case 'airing_today': {
        return 'Airing Today';
      }
      default: {
        return 'Tv Shows';
      }
    }
  }

  getServerData(pageEvent: PageEvent, keyword: string): PageEvent {
    this.currentIndex = pageEvent.pageIndex;
    pageEvent.pageIndex += 1;

    this.tvShowsService.getTvShowsPag(this.tvShowType, pageEvent.pageIndex.toString())
      .subscribe(
        (res) => {
          this.tvShows = res.results;
          this.pageIndex = this.currentIndex;
          this.length = res.total_results;
          this.pageSize = res.results.length;
        },
        (error) => {
          console.log(error);
        }
      );
    return pageEvent;
  }
}