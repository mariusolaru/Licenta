import { AboutusGroupModule } from './aboutus-group.module';

describe('AboutusGroupModule', () => {
  let aboutusgroupModule: AboutusGroupModule;

  beforeEach(() => {
    aboutusgroupModule = new AboutusGroupModule();
  });

  it('should create an instance', () => {
    expect(aboutusgroupModule).toBeTruthy();
  });
});
