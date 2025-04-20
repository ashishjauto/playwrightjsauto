

const{test, expect} = require('@playwright/test')

test('Add element on the page',async({page},testInfo)=>{

await page.goto('https://the-internet.herokuapp.com/');


 

await page.locator('a').nth('2').click();
await page.locator('button[onclick="addElement()"]').click();

const add_Element_Screenshot=await page.screenshot({path:'./screenshots/add_elementscreenshot.png',fullpage:true});

testInfo.attach('screenshot',{body:add_Element_Screenshot,contentType:'image/png'});

await expect(page.locator('button.added-manually').isVisible).toBeTruthy();




});
