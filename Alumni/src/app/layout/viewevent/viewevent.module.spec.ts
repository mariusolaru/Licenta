import { VieweventModule } from "./viewevent.module";

describe('ViewarticleModule', () => {
  let vieweventModule: VieweventModule;

  beforeEach(() => {
    vieweventModule = new VieweventModule();
  });

  it('should create an instance', () => {
    expect(vieweventModule).toBeTruthy();
  });
});
