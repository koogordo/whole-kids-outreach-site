import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  constructor(private cdr: ChangeDetectorRef, private mm: MediaMatcher) {
    this.mobileQuery = mm.matchMedia('(max-width: 700px)');
    this.mobileQueryListener = () => cdr.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit() {
  }

}
