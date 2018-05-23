import { TestBed, inject } from '@angular/core/testing';

import { TimelineService } from './timeline.service';

describe('TimelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimelineService]
    });
  });

  it('should be created', inject([TimelineService], (service: TimelineService) => {
    expect(service).toBeTruthy();
  }));
});
