import { EventsPartnershipModule } from './events-partnership.module';

describe('EventsPartnershipModule', () => {
  let eventspartnershipModule: EventsPartnershipModule;

  beforeEach(() => {
    eventspartnershipModule = new EventsPartnershipModule();
  });

  it('should create an instance', () => {
    expect(eventspartnershipModule).toBeTruthy();
  });
});
