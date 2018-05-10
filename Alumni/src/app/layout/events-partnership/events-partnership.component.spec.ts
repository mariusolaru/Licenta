import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPartnershipComponent } from './events-partnership.component';

describe('EventsPartnershipComponent', () => {
  let component: EventsPartnershipComponent;
  let fixture: ComponentFixture<EventsPartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
