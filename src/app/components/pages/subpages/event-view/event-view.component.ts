import { EventsService } from './../../../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/Router';
import { Event } from '../../../../models/Event';


@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {
  viewId: String;
  viewEvent: Event;
  attachmentView: any;
  noAttachmentView: any;
  constructor(private eserve: EventsService, private route: ActivatedRoute) {
    this.viewId = '';
    this.attachmentView = {
      'event-image': true,
     ' col-lg-4': true,
      'col-md-4': true,
      'col-sm-12': true,
      'col-xs-12': true,
      'text-center': true
    };
    this.noAttachmentView = {
      'event-image': true,
     ' col-lg-6': true,
      'col-md-6': true,
      'col-sm-12': true,
      'col-xs-12': true,
      'text-center': true
    };

  }

  ngOnInit() {
    this.viewId = this.route.snapshot.params['id'];
    this.eserve.getEventById(this.viewId).subscribe( event => {
      console.log(event);
      this.viewEvent = event;
    });
  }

}
