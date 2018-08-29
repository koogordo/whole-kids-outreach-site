import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  showtax: boolean;
  programDetailsPosition: any;
  constructor() {
    this.showtax = false;
   }

  ngOnInit() {
    this.programDetailsPosition = $('.learn_more_button');
  }

  show() {
    this.showtax = !this.showtax;
  }

  scrollToProgramDetails() {
    window.scrollTo(0, this.programDetailsPosition.scrollTop());
  }



}
