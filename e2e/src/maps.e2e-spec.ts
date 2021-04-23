import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { MapsPageObject } from './page-objects/maps.page-object';

describe('maps-behavior', () => {
    let mapsPage: MapsPageObject;
    beforeEach(() => {
        mapsPage = new MapsPageObject();
        
        mapsPage.navigateTo();
    });

    it('Clicking lobby map redirects to that page', ()=> {
        mapsPage.clickLobbyMap();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-lobby"), 5000));
    });
    it('Clicking orchestra seating chart redirects to that page', ()=> {
        mapsPage.clickOrchestraMap();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-seats-orchestra"), 5000));
    });
    it('Clicking Grand Tier map redirects to that map', ()=> {
        mapsPage.clickGTMap();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-grand"), 5000));
    });
    it('Clicking Grand Tier Seating Chart redirects to that page', ()=> {
        mapsPage.clickGTSeatingChart();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-seats-grand"), 5000));
    });
    it('Clicking balcony map redirects to that map', ()=> {
        mapsPage.clickBalconyMap();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-balcony"), 5000));
    });
    it('Clicking balcony seating chart redirects to that page', ()=> {
        mapsPage.clickBalconySeatingChart();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("map-seats-balcony"), 5000));
    });

});