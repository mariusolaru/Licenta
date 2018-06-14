import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CronologyComponent } from './cronology.component';

describe('CronologyComponent', () => {
  let component: CronologyComponent;
  let fixture: ComponentFixture<CronologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
