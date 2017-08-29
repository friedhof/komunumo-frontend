import { KomunumoFrontendPage } from './app.po';

describe('komunumo-frontend App', () => {
  let page: KomunumoFrontendPage;

  beforeEach(() => {
    page = new KomunumoFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
