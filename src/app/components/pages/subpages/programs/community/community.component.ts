import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'community1.jpg',
      'community2.jpg',
      'community3.jpg',
      'community4.jpg',
      'community5.jpg',
      'community6.jpg',
      'community7.jpg',
      'community8.jpg'
      ];
  }

  ngOnInit() {
  }

}
