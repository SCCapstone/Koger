import { browser, element, by, ExpectedConditions, protractor} from 'protractor';

export class InfoPageObject {
    navigateTo() {
        return browser.get('/tabs/tab3');
    }
    getCreatePageTitle() {
        return element(by.id('infoTitle')).getText();
    }
    // Methods below click through routing on the info page to make sure each link works
    clickUpcomingEvents() {
        var upcomingEvents_btn = element(by.id('upcomingEvents'));
        upcomingEvents_btn.click();
    }
    clickADAPage() {
        var ADA_btn = element(by.id('ADA'));
        ADA_btn.click();
    }
    clickArtPage() {
        var art_btn = element(by.id('art'));
        art_btn.click();
    }
    clickParkingPage() {
        var parking_btn = element(by.id('parking'));
        parking_btn.click();
    }
    clickPurchaseTickets() {
        var purchase_btn = element(by.id('tickets'));
        purchase_btn.click();
    }
}