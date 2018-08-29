import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcn',
  templateUrl: './mcn.component.html',
  styleUrls: ['./mcn.component.css']
})
export class McnComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'mcn1.jpg',
      'mcn2.jpg',
      'mcn3.jpg',
      'mcn4.jpg',
      'mcn5.jpg'
      ];
  }

  ngOnInit() {
  }

}
