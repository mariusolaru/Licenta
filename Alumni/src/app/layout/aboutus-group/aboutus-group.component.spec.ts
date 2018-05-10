import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusGroupComponent } from './aboutus-group.component';

describe('AboutusGroupComponent', () => {
  let component: AboutusGroupComponent;
  let fixture: ComponentFixture<AboutusGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
