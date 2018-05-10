import { AboutusMissionModule } from './aboutus-mission.module';

describe('AboutusMissionModule', () => {
  let aboutusmissionModule: AboutusMissionModule;

  beforeEach(() => {
    aboutusmissionModule = new AboutusMissionModule();
  });

  it('should create an instance', () => {
    expect(aboutusmissionModule).toBeTruthy();
  });
});
