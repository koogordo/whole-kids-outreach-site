import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BoardMember } from '../models/BoardMember';
import { Staff } from '../models/Staff';
@Injectable()
export class StaffService {
  boardCollection: AngularFirestoreCollection<BoardMember>;
  staffCollection: AngularFirestoreCollection<Staff>;
  board: Observable<BoardMember[]>;
  staff: Observable<Staff[]>;
  constructor(private firestore: AngularFirestore) {
    this.boardCollection = this.firestore.collection('boardMembers');
    this.staffCollection = this.firestore.collection('staff');
  }

  getBoardMembers(): Observable<BoardMember[]> {
    this.board = this.boardCollection.snapshotChanges().map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as BoardMember;
        const $id = action.payload.doc.id;
        return {$id, ...data};
      });
    });
    return this.board;
  }

  getStaffMembers(): Observable<Staff[]> {
      this.staff = this.staffCollection.snapshotChanges().map( changes => {
        return changes.map( action => {
          const data = action.payload.doc.data() as Staff;
          const id = action.payload.doc.id;
          return {id, ...data};
        });
      });
      return this.staff;
    }
}
