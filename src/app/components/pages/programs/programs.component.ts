import { ProgramsService } from './../../../services/programs.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Program } from '../../../models/Program';
import {MediaMatcher} from '@angular/cdk/layout';
declare var $: any;
@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  featuredHead: any;
  featuredPosition: any;
  homeBasedHead: any;
  homeBasedPosition: any;
  centerBasedHead: any;
  centerBasedPosition: any;
  programNavTop: any;
  windowPos: any;
  programNavLeft: any;

// ------------- PROGRAM ARRAYS--------------------//
  allprogs: any[];
  featuredprog: Program;
  homeVisit: any[];
  centerKid: any[];
  centerFamily: any[];
// ------------------------------------------------//

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private programs: ProgramsService, private cdr: ChangeDetectorRef, private mm: MediaMatcher) {
    this.homeVisit = [];
    this.centerKid = [];
    this.centerFamily = [];
    this.featuredprog = {
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
    this.mobileQuery = mm.matchMedia('(max-width: 700px)');
    this.mobileQueryListener = () => cdr.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
   }

  ngOnInit() {
    $(window).on('scroll', function () {
      this.programNavTop = $('.programs-nav-col').offset().top;
      this.programNavLeft = $('.programs-nav-col').offset().left;
      this.windowPos = $(this).scrollTop();
      if (this.windowPos >= this.programNavTop || this.windowPos >= 281) {
          $('.programs-nav-col').offset({top: this.windowPos, left: this.programNavLeft });
      }
    });

    this.featuredHead = $('#programs_featured');
    this.featuredPosition = this.featuredHead.offset().top;

    this.homeBasedHead = $('#programs_homevisit');
    this.homeBasedPosition = this.homeBasedHead.offset().top;

    this.centerBasedHead = $('#programs_centerkids');
    this.centerBasedPosition = this.centerBasedHead.offset().top;

    this.programs.getPrograms().subscribe( progs => {
      this.allprogs = progs;
      this.sortPrograms(this.allprogs);
    });
  }
  scrollToFeatured() {
    window.scrollTo(0, this.featuredPosition);
  }

  scrollToCenterBased() {
    window.scrollTo(0, this.centerBasedPosition);
  }

  scrollToHomeVisits() {
    window.scrollTo(0, this.homeBasedPosition);
  }

  sortPrograms(programs: any[]) {
    for (let p of programs) {
      if (p.featured) {
        this.featuredprog = p;
      }
      if (p.category === 'home') {
        this.homeVisit.push(p);
      }
      if (p.category === 'centerKids') {
        this.centerKid.push(p);
      }
      if (p.category === 'centerFamily') {
        this.centerFamily.push(p);
      }
    }
    this.homeVisit = _.uniqBy(this.homeVisit, _.isEqual);
    this.centerKid = _.uniqBy(this.centerKid, _.isEqual);
    this.centerFamily = _.uniqBy(this.centerFamily, _.isEqual);
  }



}
