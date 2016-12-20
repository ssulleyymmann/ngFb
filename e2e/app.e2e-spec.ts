import { Ngfb3Page } from './app.po';

describe('ngfb3 App', function() {
  let page: Ngfb3Page;

  beforeEach(() => {
    page = new Ngfb3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
