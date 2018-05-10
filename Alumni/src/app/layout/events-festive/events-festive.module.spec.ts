import { EventsFestiveModule } from './events-festive.module';

describe('EventsFestiveModule', () => {
  let eventsfestiveModule: EventsFestiveModule;

  beforeEach(() => {
    eventsfestiveModule = new EventsFestiveModule();
  });

  it('should create an instance', () => {
    expect(eventsfestiveModule).toBeTruthy();
  });
});
