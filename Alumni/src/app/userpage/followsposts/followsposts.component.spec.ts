import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowspostsComponent } from './followsposts.component';

describe('FollowspostsComponent', () => {
  let component: FollowspostsComponent;
  let fixture: ComponentFixture<FollowspostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowspostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowspostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
