import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApploginNavbarComponent } from './applogin-navbar.component';

describe('ApploginNavbarComponent', () => {
  let component: ApploginNavbarComponent;
  let fixture: ComponentFixture<ApploginNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApploginNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApploginNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
