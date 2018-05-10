import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFestiveComponent } from './events-festive.component';

describe('EventsFestiveComponent', () => {
  let component: EventsFestiveComponent;
  let fixture: ComponentFixture<EventsFestiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFestiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFestiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
