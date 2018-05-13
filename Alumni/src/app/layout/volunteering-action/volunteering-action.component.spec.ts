import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringActionComponent } from './volunteering-action.component';

describe('VolunteeringActionComponent', () => {
  let component: VolunteeringActionComponent;
  let fixture: ComponentFixture<VolunteeringActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteeringActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
