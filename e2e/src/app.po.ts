import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getPageTabTitle() {
    return element(by.css('.tab-selected ion-label')).getText();
  }
}
