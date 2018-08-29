import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsuCsComponent } from './wsu-cs.component';

describe('WsuCsComponent', () => {
  let component: WsuCsComponent;
  let fixture: ComponentFixture<WsuCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsuCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsuCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
