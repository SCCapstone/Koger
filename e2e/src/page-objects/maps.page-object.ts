import { browser, element, by, ExpectedConditions, protractor} from 'protractor';

export class MapsPageObject {
    navigateTo() {
        return browser.get('/tabs/tab2');
    }
    getCreatePageTitle() {
        return element(by.id('mapsTitle')).getText();
    }
    clickLobbyMap() {
        var lobbyMap_btn = element(by.id('lobbyMap'));
        lobbyMap_btn.click();
    }
    clickOrchestraMap() {
        var orchestraMap_btn = element(by.id('orchestraMap'));
        orchestraMap_btn.click();
    }
    clickGTMap() {
        var GTMap_btn = element(by.id('GTMap'));
        GTMap_btn.click();
    }
    clickGTSeatingChart(){
        var GTSeatingChart_btn = element(by.id('GTSeatingChart'));
        GTSeatingChart_btn.click();
    }
    clickBalconyMap(){
        var BalconyMap_btn = element(by.id('balconyMap'));
        BalconyMap_btn.click();
    }
    clickBalconySeatingChart(){
        var BalconySeatingChart_btn = element(by.id('balconySeatingChart'));
        BalconySeatingChart_btn.click(); 
    }
}