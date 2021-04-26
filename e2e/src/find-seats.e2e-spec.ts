import { protractor, browser, element, by} from 'protractor';
import {FindSeatsPageObject} from './page-objects/find-seats.page-object';

describe ('find-seats-behavior', () => {
    let findSeatsPageObject: FindSeatsPageObject;
    beforeEach(() => {
        findSeatsPageObject = new FindSeatsPageObject();

        findSeatsPageObject.navigateTo();
    });
    it('Find Seats Title is Correct', () => {
        expect(findSeatsPageObject.getCreatePageTitle()).toContain("Enter Ticket Information");
    });
    // Provides sample data and checks that against page provided for matching information
    it('Sample data for find seats properly directs user to correct page', () => {
        expect(findSeatsPageObject.doAllValuesMatchPage());
    });

})