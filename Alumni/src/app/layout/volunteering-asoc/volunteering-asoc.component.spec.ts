import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringAsocComponent } from './volunteering-asoc.component';

describe('VolunteeringAsocComponent', () => {
  let component: VolunteeringAsocComponent;
  let fixture: ComponentFixture<VolunteeringAsocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeringAsocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringAsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
