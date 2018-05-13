import { GraduatesModule } from './graduates.module';

describe('GraduatesModule', () => {
  let graduatesModule: GraduatesModule;

  beforeEach(() => {
    graduatesModule = new GraduatesModule();
  });

  it('should create an instance', () => {
    expect(graduatesModule).toBeTruthy();
  });
});
