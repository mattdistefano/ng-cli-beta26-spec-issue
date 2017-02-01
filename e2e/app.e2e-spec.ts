import { Beta26testPage } from './app.po';

describe('beta26test App', function() {
  let page: Beta26testPage;

  beforeEach(() => {
    page = new Beta26testPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
