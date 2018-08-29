import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedimpactComponent } from './needimpact.component';

describe('NeedimpactComponent', () => {
  let component: NeedimpactComponent;
  let fixture: ComponentFixture<NeedimpactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedimpactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
