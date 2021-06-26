import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getMainTitle(title: string): string{
    switch(title) {
      case "popular": {
        return "Popular";
      }
      case "top_rated": {
         return "Top Rated";
      }
      case "now_playing": {
        return "Now Playing";
     }
     case "upcoming":{
       return "Upcoming";
     }
      default: {
         return "Movies";
      }
   }
  }

  getHomeMovieTypes(): string[]{
   return ["popular", "top_rated", "upcoming"];   
  }

  getLinkTitle(movieType: string):string{
    switch(movieType) { 
      case "popular": {         
        return "Popular";         
      } 
      case "top_rated": {
         return "Top Rated";
      } 
      case "upcoming": {    
        return "Upcoming";
     } 
      default: {          
         return "";
      } 
   } 
  } 

  getHeroImages(){
    return ["../../../../assets/images/raiders.jpg",
    "../../../../assets/images/mandalorian.jpg",
    "../../../../assets/images/kong.jpg",
    "../../../../assets/images/scarface.jpg",
    "../../../../assets/images/starwars.jpg",
    "../../../../assets/images/terminator.jpg"];
  }


  getTvShowsMainTitle(tvShowType: string):string{
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
}
