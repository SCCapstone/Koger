import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { AdminDashboardPageObject } from './page-objects/admin-dashboard.page-object';


describe('admin-dashboard-behaviors', ()=> {
    let adminDashboardPage: AdminDashboardPageObject;
    browser.driver.manage().window().maximize();
    beforeEach(() => {
        adminDashboardPage = new AdminDashboardPageObject();
        
        adminDashboardPage.navigateTo();
    });

    it('Admin Dashboard Title Should be Correct', () => {
        expect(adminDashboardPage.getAdminPageTitle()).toContain("Admin Dashboard");
    });

    it('Clicking on Add an Event redirects to that page', () => {
        adminDashboardPage.clickAddAnEvent();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("create-event"), 5000));
    });

    it('Clicking on Edit an Event redirects to that page', () => {
        adminDashboardPage.clickEditAnEvent();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("edit-event"), 5000));
    });

    it('Clicking on Send Push Notifications redirects to that page', () => {
        adminDashboardPage.clickSendPushNotifications();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("send-push"), 5000));
    });

    it('Clicking on Logout redirects user to correct page', () => {
        adminDashboardPage.clickLogOut();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("tab3"), 5000));
    });

    it('Clicking on Logout requires user to relogin', () => {
        adminDashboardPage.clickLogOut();
        browser.driver.sleep(1000);
        browser.waitForAngular();
        var scrollToScript = 'document.getElementById("admin-login-btn").scrollIntoView();';
        var loginButton = element(by.id('admin-login-btn'));
        browser.driver.executeScript(scrollToScript).then(function () {
            loginButton.click();
            expect(browser.wait(protractor.ExpectedConditions.urlContains("admin-login"), 5000));
        })
    });

})