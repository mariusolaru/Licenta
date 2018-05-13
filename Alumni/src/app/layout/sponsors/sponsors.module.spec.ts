import { SponsorsModule } from './sponsors.module';

describe('SponsorsModule', () => {
  let sponsorsModule: SponsorsModule;

  beforeEach(() => {
    sponsorsModule = new SponsorsModule();
  });

  it('should create an instance', () => {
    expect(sponsorsModule).toBeTruthy();
  });
});
