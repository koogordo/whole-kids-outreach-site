import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-hfa',
  templateUrl: './hfa.component.html',
  styleUrls: ['./hfa.component.css']
})
export class HfaComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'hfa1.jpg',
      'hfa2.jpg',
      'hfa3.jpg',
      'hfa4.jpg',
      'hfa5.jpg',
      'hfa6.jpg',
      'hfa7.jpg',
      'hfa8.jpg',
      'hfa9.jpg'
      ];
   }

  ngOnInit() {
    $('.image-slider').slippry();
  }

}
