import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  images: string[] = [];
  actualImage: string;
  changeBackgroundCounter = 0;
  constructor(private helper: HelperService) { }

  ngOnInit(): void {
    this.images = this.helper.getHeroImages();   

      this.actualImage = this.images[0];
      setInterval(() => {
        this.changeBackgroundCounter++;
        if (this.changeBackgroundCounter > this.images.length - 1) {
          this.changeBackgroundCounter = 0;
        }
        this.actualImage = this.images[this.changeBackgroundCounter];
      }, 5000);
    }
  }
