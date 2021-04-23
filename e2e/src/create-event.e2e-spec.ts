import { create } from 'domain';
import { browser, element, by, ExpectedConditions, protractor } from 'protractor';
import { CreateEventPageObject } from './page-objects/create-event.page-object';

describe('create event page behaviours', () => {
    let createEventPage: CreateEventPageObject;

    beforeEach(() => {
        createEventPage = new CreateEventPageObject();
        
        createEventPage.navigateTo();
    });

    it('Create Event page title is correct', () => {
        expect(createEventPage.getCreatePageTitle()).toContain("Add an Event"); 
    });
    it('Entering no information for title produces error message', () => {
        expect(createEventPage.isTitleErrorMessageDisplayed());
    });
    it('Entering no information for description produces error message', () => {
        expect(createEventPage.isDescErrorMessageDisplayed());
    });
    it('Entering no information for date produces error message', () => {
        expect(createEventPage.isDateErrorMessageDisplayed());
    })
    it('Entering no information for tag produces error message', () => {
        expect(createEventPage.isTagErrorMessageDisplayed());
    });
    it('Entering no information for link produces error message', ()=> {
        expect(createEventPage.isLinkErrorMessageDisplayed());
    });
    it('Submit button should not be clickable with no data', ()=> {
        expect(createEventPage.isSubmitClickableWithNoInformation());
    })
    it('Submit button should be clickable and redirect to admin dashboard', () => {
        expect(createEventPage.isSubmitClickableWithInformation());
    })
});