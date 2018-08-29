import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Http, Response } from '@angular/http';
import { Event } from '../models/Event';

@Injectable()
export class EventsService {
  eventsRef: AngularFirestoreCollection<any>;
  events: Observable<any[]>;
  event: Observable<any>;

  constructor(private db: AngularFirestore) {
    this.eventsRef =  this.db.collection('events');
  }

  getEvents(): Observable<any[]> {
    this.events = this.eventsRef.snapshotChanges().map(changes => {
      return changes.map( actions => {
        const data = actions.payload.doc.data() as Event;
        const id = actions.payload.doc.id;
        return {id, ...data};
      });
    });
    return this.events;
  }

  getEventById(key): Observable<Event> {
    let fetched = this.eventsRef.doc(key).snapshotChanges()
    .map( change => {
      const data = change.payload.data() as Event;
      const id = change.payload.id;
      return {id, ...data};
    });
      return fetched;
  }

}
