import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringMentorComponent } from './volunteering-mentor.component';

describe('VolunteeringMentorComponent', () => {
  let component: VolunteeringMentorComponent;
  let fixture: ComponentFixture<VolunteeringMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeringMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
