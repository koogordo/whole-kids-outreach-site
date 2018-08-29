import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moms',
  templateUrl: './moms.component.html',
  styleUrls: ['./moms.component.css']
})
export class MomsComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'moms1.jpg',
      'moms2.jpg',
      'moms3.jpg',
      'moms4.jpg',
      'moms5.jpg'
      ];
  }

  ngOnInit() {
  }

}
