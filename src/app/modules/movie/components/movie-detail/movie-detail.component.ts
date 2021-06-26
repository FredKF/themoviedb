import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movie-detail.interface';
import { GenreRootObject } from 'src/app/models/movie-genres.interface';
import { MovieService } from 'src/app/modules/movie/services/movie.service';
import { Location } from '@angular/common';
import { ImageRootObject } from 'src/app/models/images.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieDetails: MovieDetails;
  genresRoot: GenreRootObject;
  genresNames: string[] = [];
  images: ImageRootObject;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private imagesService: ImagesService,
              private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{
      this.imagesService.getMovieImages(params.id.toString()).subscribe(response =>{
        if(response){
          this.images = response;
        }        
      });
    });
    this.route.params.subscribe(params =>{
      this.movieService.getMovieDetails(params.id).subscribe(
        (res) => {
          this.movieDetails = res;          
        },
        (error) => {
          console.error(error)
        });
    });
  }

  goBack(){
    this.location.back()
  }
}
