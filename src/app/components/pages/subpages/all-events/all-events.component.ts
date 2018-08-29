import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../../services/events.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit {
  i: number;
  constructor(private eserve: EventsService) { }
  events: any[];
  ngOnInit() {
    this.eserve.getEvents().subscribe( events => {
      this.events = events;
    });
  }

  checkDate(date: any) {
    let currentDate = new Date();
    let dateOfEvent = new Date(date);
    let comp =  dateOfEvent.getTime() - currentDate.getTime();
    let compDays = Math.ceil(comp / (1000 * 3600 * 24));
    if (this.i <= 3) {
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

}
