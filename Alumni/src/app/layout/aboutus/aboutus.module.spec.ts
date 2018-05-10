import { AboutusModule } from './aboutus.module';

describe('AboutusModule', () => {
  let aboutusModule: AboutusModule;

  beforeEach(() => {
    aboutusModule = new AboutusModule();
  });

  it('should create an instance', () => {
    expect(aboutusModule).toBeTruthy();
  });
});
