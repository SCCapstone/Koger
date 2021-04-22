import { browser, element, by} from 'protractor';

export class CreateEventPageObject {
    navigateTo() {
        return browser.get('/create-event');
    }
    getCreatePageTitle() {
        return element(by.css('#create-event-title')).getText();
    }

}
