import { browser, element, by, ExpectedConditions, protractor} from 'protractor';

export class EditEventPageObject {
    navigateTo() {
        return browser.get('/edit-event');
    }
    getCreatePageTitle() {
        return element(by.css('#edit-event-title')).getText();
    }
    editTestEvent(){
        browser.waitForAngular();
        var scrollToScript = 'document.getElementById("bottomimage").scrollIntoView();';
        browser.executeScript(scrollToScript).then(function() {
            browser.waitForAngular();
            var test_event_edit_button = element(by.css('#test_title'));
            test_event_edit_button.click();
            browser.waitForAngular();
            var test_event_title = element(by.css('#test_description'));
            return test_event_title.isDisplayed();
        })
    }
    deleteTestEvent(){
        browser.waitForAngular();
        var scrollToScript = 'document.getElementById("bottomimage").scrollIntoView();';
        browser.executeScript(scrollToScript).then(function() {
            var test_event_delete_button = element(by.css('#test_date'));
            test_event_delete_button.click();
            browser.driver.sleep(1000);
            element.all(by.id('Broadway')).then(function(items) {
                return items.length;
            });
        })
    }
}