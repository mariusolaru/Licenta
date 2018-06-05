import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserpageprofileComponent } from './vuserpageprofile.component';

describe('VuserpageprofileComponent', () => {
  let component: VuserpageprofileComponent;
  let fixture: ComponentFixture<VuserpageprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuserpageprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserpageprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
