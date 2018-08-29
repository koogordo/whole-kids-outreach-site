import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitprogramComponent } from './visitprogram.component';

describe('VisitprogramComponent', () => {
  let component: VisitprogramComponent;
  let fixture: ComponentFixture<VisitprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
