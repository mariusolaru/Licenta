import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduatesRegisterComponent } from './graduates-register.component';

describe('GraduatesRegisterComponent', () => {
  let component: GraduatesRegisterComponent;
  let fixture: ComponentFixture<GraduatesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduatesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduatesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
