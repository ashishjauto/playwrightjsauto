import {test,expect} from '@playwright/test';

import { SauceLoginPage } from '../pom/saucelab/SauceLoginPage';

test('SauceLab Reset',async({page},testInfo)=>{
 
 const lockedOutUserTest = new SauceLoginPage(page)   ;

 lockedOutUserTest.navigate();
 lockedOutUserTest.userName_password('standard_user','secret_sauce');
 lockedOutUserTest.signIntoSauce();

/*  
 let converttoArray=await page.locator("[class='login_credentials']").innerText();
 let array = converttoArray.split(' ').map(word => word.trim()) ;
 
 const startsWithA = array.filter(array => array.startsWith("error")); */

 

 console.log( (await page.locator("[class='login_credentials']").innerText()));
 console.log( await page.locator("[class='login_password']").innerText());


const screenshot_lockedOutUserTest=await page.screenshot({ path: 'screenshots/screenshot_lockedOutUserTest.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_lockedOutUserTest, contentType: 'image/png' });

;


expect(await page.locator("[data-test='error']").innerText()).toBe("Epic sadface: Sorry, this user has been locked out.");


});
