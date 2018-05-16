import { StudiesModule } from './studies.module';

describe('StudiesModule', () => {
  let studiesModule: StudiesModule;

  beforeEach(() => {
    studiesModule = new StudiesModule();
  });

  it('should create an instance', () => {
    expect(studiesModule).toBeTruthy();
  });
});
