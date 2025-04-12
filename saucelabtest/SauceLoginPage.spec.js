
import {test,expect} from '@playwright/test';

const { SauceLoginPage } = require('../pom/saucelab/SauceLoginPage');


 

test('SauceLoginPage', async ({ page },testInfo) => {
const loginTest = new SauceLoginPage(page);

await loginTest.navigate(); 



await loginTest.userName_sendKeys();
await loginTest.password_sendKeys();


console.log( (await page.locator("[class='login_credentials']").innerText()));
console.log( await page.locator("[class='login_password']").innerText());


const screenshot_SauceLoginPageBefore=await page.screenshot({ path: 'screenshots/screenshot_SauceLoginPageBefore.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_SauceLoginPageBefore, contentType: 'image/png' });

await loginTest.signIntoSauce();

const screenshot_SauceLoginPage=await page.screenshot({ path: 'screenshots/screenshot_SauceLoginPage.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_SauceLoginPage, contentType: 'image/png' });
});



