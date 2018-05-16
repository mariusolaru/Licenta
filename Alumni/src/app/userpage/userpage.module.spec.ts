import { UserpageModule } from './userpage.module';

describe('UserpageModule', () => {
  let userpageModule: UserpageModule;

  beforeEach(() => {
    userpageModule = new UserpageModule();
  });

  it('should create an instance', () => {
    expect(userpageModule).toBeTruthy();
  });
});
