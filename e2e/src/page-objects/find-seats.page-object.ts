import { browser, element, by} from 'protractor';

export class FindSeatsPageObject {
    navigateTo() {
        return browser.get('/tabs/tab1');
    }
    getCreatePageTitle() {
        return element(by.css('#ticket-title')).getText();
    }
    //Uses sample data to click through prompts and then compares sample data to data provided by page for directions
    doAllValuesMatchPage(){
        var ok_btn = element(by.css('div.alert-button-group.sc-ion-alert-md > button:nth-child(2)'));
        var section_btn = element(by.id('SectionSelect'));
        section_btn.click();
        browser.driver.sleep(1000);
        var sample_section = element(by.id('alert-input-1-0'));
        var sample_section_txt = sample_section.getText();
        sample_section.click();
        browser.waitForAngular();
        ok_btn.click();
        var row_btn = element(by.id('RowSelect'));
        row_btn.click();
        browser.driver.sleep(1000);
        var sample_row = element(by.id('alert-input-2-0'));
        var sample_row_txt = sample_row.getText();
        sample_row.click();
        browser.waitForAngular();
        ok_btn.click();
        browser.driver.sleep(1000);
        var seat_btn = element(by.id('SeatSelect'));
        seat_btn.click();
        browser.driver.sleep(1000);
        var sample_seat = element(by.id('alert-input-3-0'));
        var sample_seat_txt = sample_seat.getText();
        sample_seat.click();
        browser.waitForAngular();
        ok_btn.click();
        browser.waitForAngular();
        var scrollToScript = 'document.getElementById("submitbtn").scrollIntoView();';
        browser.executeScript(scrollToScript).then(function() {
            var submit_btn = element(by.css('#submitbtn'));
            browser.sleep(5000);
            submit_btn.click();
            browser.driver.sleep(1000);
        });
        browser.waitForAngular();
        var seatdesc_sect = element(by.id('RORC\:\ Right\ Orchestra'));
        var seatdesc_row = element(by.id('A'));
        var seatdesc_seat = element(by.id('1'));
        expect(seatdesc_sect.getText()).toContain(sample_section_txt);
        expect(seatdesc_row.getText()).toContain(sample_row_txt);
        expect(seatdesc_seat.getText()).toContain(sample_seat_txt);
    }
}