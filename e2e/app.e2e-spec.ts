import { EtjWeddingNgPage } from './app.po';

describe('etj-wedding-ng App', function() {
  let page: EtjWeddingNgPage;

  beforeEach(() => {
    page = new EtjWeddingNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
