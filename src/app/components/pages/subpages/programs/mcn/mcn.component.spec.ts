import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McnComponent } from './mcn.component';

describe('McnComponent', () => {
  let component: McnComponent;
  let fixture: ComponentFixture<McnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
