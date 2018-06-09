import { ViewarticleModule } from './viewarticle.module';

describe('ViewarticleModule', () => {
  let viewArticleModule: ViewarticleModule;

  beforeEach(() => {
    viewArticleModule = new ViewarticleModule();
  });

  it('should create an instance', () => {
    expect(viewArticleModule).toBeTruthy();
  });
});
