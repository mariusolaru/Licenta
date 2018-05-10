import { AboutusCouncilModule } from './aboutus-council.module';

describe('AboutusCouncilModule', () => {
  let aboutuscouncilModule: AboutusCouncilModule;

  beforeEach(() => {
    aboutuscouncilModule = new AboutusCouncilModule();
  });

  it('should create an instance', () => {
    expect(aboutuscouncilModule).toBeTruthy();
  });
});
