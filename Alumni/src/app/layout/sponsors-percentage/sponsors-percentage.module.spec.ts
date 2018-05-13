import { SponsorsPercentageModule } from './sponsors-percentage.module';

describe('SponsorsPercentageModule', () => {
  let sponsorspercentageModule: SponsorsPercentageModule;

  beforeEach(() => {
    sponsorspercentageModule = new SponsorsPercentageModule();
  });

  it('should create an instance', () => {
    expect(sponsorspercentageModule).toBeTruthy();
  });
});
