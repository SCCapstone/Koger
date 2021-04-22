import { browser, element, by} from 'protractor';

export class CreateEventPageObject {
    navigateTo() {
        return browser.get('/create-event');
    }
    getCreatePageTitle() {
        return element(by.css('#create-event-title')).getText();
    }
    isTitleErrorMessageDisplayed() {
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        title_input.click();
        desc_input.click();
        return element(by.css('#title-error')).isDisplayed();
    }
    isDescErrorMessageDisplayed() {
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        desc_input.click();
        title_input.click();
        return element(by.css('#desc-error')).isDisplayed();
    }
    isDateErrorMessageDisplayed() {
        var date_input = element(by.css('ion-input[formControlName="dates"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        date_input.click();
        title_input.click();
        return element(by.css('#dates-error')).isDisplayed();
    }
    isTagErrorMessageDisplayed() {
        var tag_input = element(by.css('ion-select'));
        tag_input.click();
        browser.driver.sleep(1000);
        var cancel_button = element(by.css('button.alert-button.ion-focusable.ion-activatable.alert-button-role-cancel.sc-ion-alert-md'));
        cancel_button.click();
        return element(by.css('#tag-error')).isDisplayed();
    }
    isLinkErrorMessageDisplayed(){
        var link_input = element(by.css('ion-input[formControlName="link"] input'));
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        link_input.click();
        title_input.click();
        return element(by.css('#link-error')).isDisplayed();

    }
    isSubmitClickableWithNoInformation(){
        var submit_btn = element(by.css('#submit-btn'));
        return !submit_btn.isEnabled();
    }
    isSubmitClickableWithInformation(){
        var title_input = element(by.css('ion-input[formControlName="eventName"] input'));
        var desc_input = element(by.css('ion-input[formControlName="eventDescription"] input'));
        var tag_input = element(by.css('ion-select'));
        var date_input = element(by.css('ion-input[formControlName="dates"] input'));
        var submit_btn = element(by.css('#submit-btn'));
    }

}
