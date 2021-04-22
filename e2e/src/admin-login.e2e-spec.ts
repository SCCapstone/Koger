import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { AdminLoginPageObject } from './page-objects/admin-login.page-object';

describe('admin-login-behaviors', () => {
    let adminPage: AdminLoginPageObject;
    beforeEach(() => {
        adminPage = new AdminLoginPageObject();
        
        adminPage.navigateTo();
    });

    it('Admin Login page title is correct', () => {
        expect(adminPage.getAdminPageTitle()).toContain("Admin Login"); 
    });

    it('Using correct information should login', () => {
        adminPage.loginSuccessAdminPage();
        expect(browser.wait(protractor.ExpectedConditions.urlContains("admin-dashboard"), 5000));
        
    });

    it('Using incorrect information should be rejected', () => {
        expect(adminPage.loginUnsuccessfulAdminPage());
    });

});