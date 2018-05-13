import { GraduatesRegisterModule } from './graduates-register.module';

describe('GraduatesRegisterModule', () => {
  let graduatesregisterModule: GraduatesRegisterModule;

  beforeEach(() => {
    graduatesregisterModule = new GraduatesRegisterModule();
  });

  it('should create an instance', () => {
    expect(graduatesregisterModule).toBeTruthy();
  });
});
