import { YeterPage } from './app.po';

describe('yeter App', () => {
  let page: YeterPage;

  beforeEach(() => {
    page = new YeterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
