import { browser, element, by, ExpectedConditions, protractor} from 'protractor';

export class CreateEventPageObject {
    navigateTo() {
        browser.get('/admin-dashboard');
        var create_btn = element(by.id('create-event-btn'));
        create_btn.click();
        browser.driver.sleep(1000);
        return;
    }
    getCreatePageTitle() {
        return element(by.css('#create-event-title')).getText();
    }
    //Touches title and then description to see if error pops up for title
    isTitleErrorMessageDisplayed() {
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        title_input.click();
        desc_input.click();
        return element(by.css('#title-error')).isDisplayed();
    }
    //Touches desc and then title to see if error pops up for title
    isDescErrorMessageDisplayed() {
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        desc_input.click();
        title_input.click();
        return element(by.css('#desc-error')).isDisplayed();
    }
    //Touches dates and then title to see if error pops up for title
    isDateErrorMessageDisplayed() {
        var date_input = element(by.css('ion-input[formControlName="dates"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        date_input.click();
        title_input.click();
        return element(by.css('#dates-error')).isDisplayed();
    }
    //Touches tag and hits cancel without putting in input to see if error pops up
    isTagErrorMessageDisplayed() {
        var tag_input = element(by.css('ion-select'));
        tag_input.click();
        browser.driver.sleep(1000);
        var cancel_button = element(by.css('button.alert-button.ion-focusable.ion-activatable.alert-button-role-cancel.sc-ion-alert-md'));
        cancel_button.click();
        return element(by.css('#tag-error')).isDisplayed();
    }
    //Touches link then title to see if error pops up
    isLinkErrorMessageDisplayed(){
        var link_input = element(by.css('ion-input[formControlName="link"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        link_input.click();
        title_input.click();
        return element(by.css('#link-error')).isDisplayed();

    }
    //Ensures that submit button is not clickable with no info provided
    isSubmitClickableWithNoInformation(){
        var submit_btn = element(by.css('#submit-btn'));
        return !submit_btn.isEnabled();
    }
    //Ensures submit button is clickable with information provided
    isSubmitClickableWithInformation(){
        let title = "test_title";
        let desc = "test_description";
        let date = "test_date";
        let link = "https://kogercenterforthearts.com/event.php?id=981"
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        var tag_select_input = element(by.css('#alert-input-1-1'));
        var date_input = element(by.css('ion-input[formControlName="dates"] input'));
        var link_input = element(by.css('ion-input[formControlName="link"] input'));
        var tag_input = element(by.css('ion-select'));
        var ok_btn = element(by.css('div.alert-button-group.sc-ion-alert-md > button:nth-child(2)'));
        var submit_btn = element(by.css('#submit-btn'));

        title_input.sendKeys(title);
        desc_input.sendKeys(desc);
        date_input.sendKeys(date);
        link_input.sendKeys(link);
        tag_input.click();
        browser.driver.sleep(1000);
        tag_select_input.click();
        browser.driver.sleep(1000);
        ok_btn.click();
        browser.driver.sleep(1000);
        submit_btn.click();

        return browser.wait(protractor.ExpectedConditions.urlContains("admin-dashboard"), 5000);
    }
}
