import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { EditEventPageObject } from './page-objects/edit-event.page-object';

describe('edit-and-delete-behaviors', () => {
    let editEventPage: EditEventPageObject;
    beforeEach(() => {
        editEventPage = new EditEventPageObject();
        editEventPage.navigateTo();
    });
    it('Edit the test event', () => {
        expect(editEventPage.editTestEvent()).toBe(0);
    });
    it('Delete the test event', ()=> {
        expect(editEventPage.deleteTestEvent());
    });
});