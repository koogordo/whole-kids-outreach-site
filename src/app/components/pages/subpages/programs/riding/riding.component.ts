import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riding',
  templateUrl: './riding.component.html',
  styleUrls: ['./riding.component.css']
})
export class RidingComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'riding1.jpg',
      'riding2.jpg',
      'riding3.jpg',
      'riding4.jpg',
      'riding5.jpg',
      'riding6.jpg',
      'riding7.jpg',
      'riding8.jpg',
      'riding9.jpg'
      ];
   }

  ngOnInit() {
  }

}
