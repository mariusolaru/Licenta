import { OportunitiesModule } from './oportunities.module';

describe('OportunitiesModule', () => {
  let oportunitiesModule: OportunitiesModule;

  beforeEach(() => {
    oportunitiesModule = new OportunitiesModule();
  });

  it('should create an instance', () => {
    expect(oportunitiesModule).toBeTruthy();
  });
});
