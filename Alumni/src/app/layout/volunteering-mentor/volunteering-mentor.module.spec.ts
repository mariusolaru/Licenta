import { VolunteeringMentorModule } from './volunteering-mentor.module';

describe('VolunteeringMentorModule', () => {
  let volunteeringmentorModule: VolunteeringMentorModule;

  beforeEach(() => {
    volunteeringmentorModule = new VolunteeringMentorModule();
  });

  it('should create an instance', () => {
    expect(volunteeringmentorModule).toBeTruthy();
  });
});
