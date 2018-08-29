import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swim',
  templateUrl: './swim.component.html',
  styleUrls: ['./swim.component.css']
})
export class SwimComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'swim1.jpg',
      'swim2.jpg',
      'swim3.jpg',
      'swim4.jpg',
      'swim5.jpg',
      'swim6.jpg',
      'swim7.jpg'
      ];
  }

  ngOnInit() {
  }

}
