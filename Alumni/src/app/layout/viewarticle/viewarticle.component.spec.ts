import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewarticleComponent } from './viewarticle.component';

describe('ViewarticleComponent', () => {
  let component: ViewarticleComponent;
  let fixture: ComponentFixture<ViewarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
