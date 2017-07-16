import { AreaCnPage } from './app.po';

describe('area-cn App', () => {
  let page: AreaCnPage;

  beforeEach(() => {
    page = new AreaCnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
