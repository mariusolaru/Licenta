import { VolunteeringModule } from './volunteering.module';

describe('VolunteeringModule', () => {
  let volunteeringModule: VolunteeringModule;

  beforeEach(() => {
    volunteeringModule = new VolunteeringModule();
  });

  it('should create an instance', () => {
    expect(volunteeringModule).toBeTruthy();
  });
});
