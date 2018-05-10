import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMeetingsComponent } from './events-meetings.component';

describe('EventsMeetingsComponent', () => {
  let component: EventsMeetingsComponent;
  let fixture: ComponentFixture<EventsMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
