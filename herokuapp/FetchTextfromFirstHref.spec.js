
const {test, expect}=require('@playwright/test');

test.only('fetch Text from 1st element',async({page},testInfo)=>{

 await page.goto('https://the-internet.herokuapp.com/');
 await page.locator('a').nth(1).click();
 const getInnerText = await page.locator('div.example p').textContent();
 
 console.log(getInnerText);
 const fetchElementscreenshot =  await page.screenshot({path:'./screenshots/fetchElementscreenshot.png',fullPage:true});
 
 await testInfo.attach('screenshot',{body:fetchElementscreenshot,contentType:'image/png'});



});