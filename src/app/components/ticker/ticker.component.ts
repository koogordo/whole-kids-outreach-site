
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/Event';
import { DatePipe } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {
  events: any[];
  firstFiveEvents: any[];
  winSize: any;
  i: number;
  constructor(private eventsService: EventsService) {


  }

  checkDate(date: any) {
    let currentDate = new Date();
    let dateOfEvent = new Date(date);
    let comp =  dateOfEvent.getTime() - currentDate.getTime();
    let compDays = Math.ceil(comp / (1000 * 3600 * 24));
    if (this.i <= 5) {
      console.log(compDays);
      console.log(comp);
      console.log(currentDate.getTime());
      console.log(dateOfEvent.getTime());
    }
    this.i++;
    if (compDays >= -2 && compDays <= 0 ) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.i = 1;
    this.eventsService.getEvents().subscribe( events => {
      if (events.length >= 5) {
        this.events = events.slice(0, 5);
      } else {
        this.events = events;
      }
    });
    this.winSize = $(window).width();
    console.log(this.winSize);
    $(window).resize( () => {
      this.winSize = $(window).width();
      console.log(this.winSize);
    });

  }
  }



