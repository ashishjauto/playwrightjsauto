
import {test,expect} from '@playwright/test';

import { SauceLoginPage } from './SauceLoginPage';


 

test('SauceLoginPage', async ({ page },testInfo) => {
const loginTest = new SauceLoginPage(page);

await loginTest.navigate(); 

await loginTest.userName_sendKeys();
await loginTest.password_sendKeys();
await loginTest.signIntoSauce();

const screenshot_SauceLoginPage=await page.screenshot({ path: 'screenshots/screenshot_SauceLoginPage.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_SauceLoginPage, contentType: 'image/png' });
});



