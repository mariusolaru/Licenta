import { GraduatesPortraitsModule } from './graduates-portraits.module';

describe('GraduatesPortraitsModule', () => {
  let graduatesportraitsModule: GraduatesPortraitsModule;

  beforeEach(() => {
    graduatesportraitsModule = new GraduatesPortraitsModule();
  });

  it('should create an instance', () => {
    expect(graduatesportraitsModule).toBeTruthy();
  });
});
