import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../../services/staff.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
board: any[];
staffers: any[];
boardPositions: string[];
staffPositions: string[];
  constructor(private staff: StaffService) {
    this.boardPositions = ['Board President', 'Board Vice President', 'Board Treasurer', 'Board Recording Secretary', 'Board Member'];
    this.staffPositions = [
      'Executive Director',
      'Center Director',
      'Nursing Program Coordinator',
      'HFA Director',
      'Development Director',
      'Program Support Coordinator',
      'Administrative Support Coordinator',
      'Finance Coordinator',
      'Outreach Specialist ',
      'Center Staff',
      'IT Specialist'
   ];
  }

  ngOnInit() {
    this.staff.getBoardMembers().subscribe( board => {
      this.board = board;
      this.board.sort((firstObject, secondObject) => {
        return firstObject.position - secondObject.position;
      });
    });

    this.staff.getStaffMembers().subscribe(staff => {
      this.staffers = staff;
      this.staffers.sort((firstObject, secondObject) => {
        return firstObject.position - secondObject.position;
      });
    });
  }

}
