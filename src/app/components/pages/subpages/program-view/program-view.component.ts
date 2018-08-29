import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/Router';
import { ProgramsService } from '../../../../services/programs.service';
import { Program } from '../../../../models/Program';
@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.css']
})
export class ProgramViewComponent implements OnInit {
  programId: string;
  viewProgram: Program;
  constructor(private pserve: ProgramsService, private route: ActivatedRoute) {
    this.programId = '';
    this.viewProgram = {
      $id: '',
      title: '',
      category: '',
      description: '',
      tagline: '',
      featuredimg: {},
      images: [],
      featured: true,
      when: '',
      forwho: '',
      howtoreg: ''
    };
   }

  ngOnInit() {
    this.programId = this.route.snapshot.params['id'];

    this.pserve.getProgramById(this.programId).subscribe( prog => {
      this.viewProgram = prog;
    });
  }

}
