import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunitiesComponent } from './oportunities.component';

describe('OportunitiesComponent', () => {
  let component: OportunitiesComponent;
  let fixture: ComponentFixture<OportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
