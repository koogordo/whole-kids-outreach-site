import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas.component.html',
  styleUrls: ['./xmas.component.css']
})
export class XmasComponent implements OnInit {
  images: String[] = [];
  constructor() {
    this.images = [
      'xmas1.jpg',
      'xmas2.jpg',
      'xmas3.jpg',
      'xmas4.jpg',
      'xmas5.jpg',
      'xmas6.jpg',
      'xmas7.jpg',
      'xmas8.jpg',
      'xmas9.jpg',
      'xmas10.jpg'
      ];
  }

  ngOnInit() {
  }

}
