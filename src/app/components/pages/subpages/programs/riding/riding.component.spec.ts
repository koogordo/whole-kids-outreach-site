import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidingComponent } from './riding.component';

describe('RidingComponent', () => {
  let component: RidingComponent;
  let fixture: ComponentFixture<RidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
