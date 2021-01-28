import { browser, element, by } from 'protractor';

export class AdminPageObject {
    navigateTo() {
        return browser.get('/admin-login');
    }
    getAdminPageTitle() {
        return element(by.css('ion-card content')).getText();
    }
}