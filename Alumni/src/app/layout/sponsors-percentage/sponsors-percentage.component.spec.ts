import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPercentageComponent } from './sponsors-percentage.component';

describe('SponsorsPercentageComponent', () => {
  let component: SponsorsPercentageComponent;
  let fixture: ComponentFixture<SponsorsPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
