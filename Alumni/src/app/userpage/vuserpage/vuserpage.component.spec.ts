import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuserpageComponent } from './vuserpage.component';

describe('VuserpageComponent', () => {
  let component: VuserpageComponent;
  let fixture: ComponentFixture<VuserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
