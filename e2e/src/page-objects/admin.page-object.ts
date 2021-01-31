import { browser, element, by } from 'protractor';

// Basic page object class, however, its not utilized currently
// Will be utilized for future behavioral test
export class AdminPageObject {
    navigateTo() {
        return browser.get('/admin-login');
    }
    getAdminPageTitle() {
        return element(by.css('.ion-card content')).getText();
    }
}