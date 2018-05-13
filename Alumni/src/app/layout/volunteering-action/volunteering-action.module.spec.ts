import { VolunteeringActionModule } from './volunteering-action.module';

describe('VolunteeringActionModule', () => {
  let volunteeringactionModule: VolunteeringActionModule;

  beforeEach(() => {
    volunteeringactionModule = new VolunteeringActionModule();
  });

  it('should create an instance', () => {
    expect(volunteeringactionModule).toBeTruthy();
  });
});
