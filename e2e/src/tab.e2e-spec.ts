import { browser, element, by, ExpectedConditions } from 'protractor';

describe('tabs', () => {

  beforeEach(() => {
    //page = new AppPage();
    browser.get("/");
  });

  it('Tab 0 should be named Home', () => {
    //page.navigateTo();
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Home"); 
  });

  it('User can navigate to Tab 1 or the Find Seats Tab', async () => {
    await element(by.css("[tab=tab1]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Find Seats");
  });

  it('User can navigate to Tab 2 or the Maps Tab', async () => {
    await element(by.css("[tab=tab2]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Maps");
  })

  it('User can navigate to Tab 3 or the Info Tab', async () => {
    await element(by.css("[tab=tab3]")).click();

    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Info");
  })
});
