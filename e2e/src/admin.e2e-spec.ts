import { browser } from 'protractor';
import { AdminPageObject } from './page-objects/admin.page-object';
describe('tabs', () => {
    let adminPage: AdminPageObject;

    beforeEach(() => {
      adminPage = new AdminPageObject();
      adminPage.navigateTo();
    });

    it('a user is able to navigate and read the admin page title'), () => {
        expect(adminPage.getAdminPageTitle()).toContain("Admin Login")
    }
});