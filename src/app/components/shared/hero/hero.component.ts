import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  images: string[] = [];
  actualImage: string;
  changeBackgroundCounter = 0;
  constructor() { }

  ngOnInit(): void {
    this.images = ["../../../../assets/images/raiders.jpg",
    "../../../../assets/images/mandalorian.jpg",
    "../../../../assets/images/kong.jpg",
    "../../../../assets/images/scarface.jpg",
    "../../../../assets/images/starwars.jpg",
    "../../../../assets/images/terminator.jpg"];


      console.log(this.images[0]);


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
