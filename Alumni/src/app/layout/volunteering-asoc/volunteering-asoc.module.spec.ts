import { VolunteeringAsocModule } from './volunteering-asoc.module';

describe('VolunteeringAsocModule', () => {
  let volunteeringasocModule: VolunteeringAsocModule;

  beforeEach(() => {
    volunteeringasocModule = new VolunteeringAsocModule();
  });

  it('should create an instance', () => {
    expect(volunteeringasocModule).toBeTruthy();
  });
});
