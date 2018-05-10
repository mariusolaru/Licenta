import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusMissionComponent } from './aboutus-mission.component';

describe('AboutusMissionComponent', () => {
  let component: AboutusMissionComponent;
  let fixture: ComponentFixture<AboutusMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
