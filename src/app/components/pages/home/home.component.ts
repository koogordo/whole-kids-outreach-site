import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[];
  winSize: any;
  showBanner: boolean;
  showEventTabs: boolean;
  constructor(private es: EventsService) {

  }

  ngOnInit() {
    this.es.getEvents().subscribe( events => {
      this.events = events;
    });
    this.winSize = $(window).width();
    $(window).resize( () => {
      this.winSize = $(window).width();
    });

  }
}
