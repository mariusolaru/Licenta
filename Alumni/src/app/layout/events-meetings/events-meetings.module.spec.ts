import { EventsMeetingsModule } from './events-meetings.module';

describe('EventsMeetingsModule', () => {
  let eventsmeetingsModule: EventsMeetingsModule;

  beforeEach(() => {
    eventsmeetingsModule = new EventsMeetingsModule();
  });

  it('should create an instance', () => {
    expect(eventsmeetingsModule).toBeTruthy();
  });
});
