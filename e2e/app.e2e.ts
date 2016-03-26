import { SleepdiaryPage } from './app.po';

describe('sleepdiary App', function() {
  let page: SleepdiaryPage;

  beforeEach(() => {
    page = new SleepdiaryPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sleepdiary Works!');
  });
});
