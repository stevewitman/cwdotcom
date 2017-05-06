import { CwdotcomPage } from './app.po';

describe('cwdotcom App', () => {
  let page: CwdotcomPage;

  beforeEach(() => {
    page = new CwdotcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
