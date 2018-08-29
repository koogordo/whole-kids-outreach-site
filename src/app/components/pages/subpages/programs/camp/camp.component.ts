import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
declare var $: any;
@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {
  images: String[] = [];
  slider: any;
  constructor() {
    this.images = [
      'camp1.jpg',
      'camp2.jpg',
      'camp3.jpg',
      'camp4.jpg',
      'camp5.jpg',
      'camp6.jpg',
      'camp7.jpg',
      'camp8.jpg',
      'camp9.jpg',
      'camp10.jpg',
      'camp11.jpg',
      'camp12.jpg',
      'camp13.jpg',
      'camp14.jpg',
      'camp15.jpg',
      'camp16.jpg',
      'camp17.jpg',
      'camp18.jpg',
      'camp19.jpg'
      ];


   }

  ngOnInit() {
    this.slider = $('.image-slider');
    this.slider.slippry({ captions: false });
  }

}
