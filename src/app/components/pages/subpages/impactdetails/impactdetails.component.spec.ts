import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactdetailsComponent } from './impactdetails.component';

describe('ImpactdetailsComponent', () => {
  let component: ImpactdetailsComponent;
  let fixture: ComponentFixture<ImpactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
