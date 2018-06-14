import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologypostComponent } from './cronologypost.component';

describe('CronologypostComponent', () => {
  let component: CronologypostComponent;
  let fixture: ComponentFixture<CronologypostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronologypostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronologypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
