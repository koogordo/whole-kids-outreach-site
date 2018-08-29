import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HfaComponent } from './hfa.component';

describe('HfaComponent', () => {
  let component: HfaComponent;
  let fixture: ComponentFixture<HfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
