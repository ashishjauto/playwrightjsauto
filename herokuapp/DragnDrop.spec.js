const{test,expect}= require('@playwright/test')

test('Drag N Drop',async({page},testInfo)=>{

await page.goto('https://the-internet.herokuapp.com/');

await page.locator('a').nth(10).click();

await page.locator('div#column-b').hover();


const dragNdrop_screenshot= await page.screenshot({path:'./screenshots/dragNdrop.png',fullPage:true});

await testInfo.attach('screenshot',{body:dragNdrop_screenshot,contentType:'image/png'});
 
const from = await page.locator('div#column-b').boundingBox();
const to = await page.locator('div#column-a').boundingBox();

if (from && to) {
  await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
  await page.mouse.down();
  await page.mouse.move(to.x + to.width / 2, to.y + to.height / 2, { steps: 10 });
  await page.mouse.up();
}



const dragNdrop_screenshotAfter= await page.screenshot({path:'./screenshots/dragNdrop.png',fullPage:true});

await testInfo.attach('screenshot',{body:dragNdrop_screenshotAfter,contentType:'image/png'});



});