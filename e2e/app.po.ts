export class SleepdiaryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sleepdiary-app p')).getText();
  }
}
