import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Program } from '../models/Program';
@Injectable()
export class ProgramsService {
  programCollection: AngularFirestoreCollection<Program>;
  programs: Observable<Program[]>;
  constructor(private program: AngularFirestore) {
    this.programCollection = this.program.collection('programs');
   }

   getPrograms(): Observable<Program[]> {
    this.programs = this.programCollection.snapshotChanges().map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Program;
        const $id = action.payload.doc.id;
        return {$id, ...data};
      });
    });
    return this.programs;
  }

  getProgramById(id): Observable<Program> {
    let fetched = this.programCollection.doc(id).snapshotChanges()
    .map( change => {
      const data = change.payload.data() as Program;
      const docId = change.payload.id;
      return {id, ...data};
    });
      return fetched;
  }

}
