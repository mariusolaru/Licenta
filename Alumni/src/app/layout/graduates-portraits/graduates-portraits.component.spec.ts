import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesPortraitsComponent } from './graduates-portraits.component';

describe('GraduatesPortraitsComponent', () => {
  let component: GraduatesPortraitsComponent;
  let fixture: ComponentFixture<GraduatesPortraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduatesPortraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesPortraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
