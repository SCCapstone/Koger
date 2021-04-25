import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { InfoPageObject } from './page-objects/info.page-object';

describe('info-behavior', () => {
    let infoPage: InfoPageObject;
    beforeEach(() => {
        infoPage = new InfoPageObject();
        
        infoPage.navigateTo();
    });
    // Checks routing of all buttons for this page
    it('Clicking upcoming events redirects to that page', ()=> {
        infoPage.clickUpcomingEvents();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("upcoming-events"), 5000));
    });
    it('Clicking Art in the Koger Center redirects to that page', ()=> {
        infoPage.clickArtPage();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("art"), 5000));
    });
    it('Clicking Parking Information redirects to that page', ()=> {
        infoPage.clickParkingPage();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("parking"), 5000));
    });
    it('Clicking ADA Accessibility redirects to that page', ()=> {
        infoPage.clickADAPage();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("handicapped"), 5000));
    });


});