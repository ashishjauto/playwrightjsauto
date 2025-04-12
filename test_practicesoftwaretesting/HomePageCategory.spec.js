const { test, expect }  = require('@playwright/test');



/*testing DOUBLE QUOTES with test so keep an eye */
//test('HomePage_Support', async ({ page },testInfo) => {

test("HomePage_Category_HandTools",async({page},testInfo)=>{


await page.goto('https://practicesoftwaretesting.com/');
await page.locator('[data-test="nav-categories"]').click();
await page.locator('[data-test="nav-hand-tools"]').click();

await page.getByText('Thor Hammer').click();

const produciondescriptonText=await page.locator('xpath=//*[@id="description"]').innerText();

test.info(produciondescriptonText);
console.log(produciondescriptonText)

await page.locator('[data-test="increase-quantity"]').click();
await page.locator('[data-test="add-to-cart"]').click();
const getTextofAlert =await page.getByRole('alert', { name: 'You can only have one Thor' }).innerText;

test.info(getTextofAlert)



await page.locator('[data-test="add-to-favorites"]').click();
const getTextofAlert1= await page.getByRole('alert', { name: 'Unauthorized, can not add' }).innerText; 
 

test.info(getTextofAlert1)


const screenshot_HomePage_Category_HandTools=await page.screenshot({ path: 'screenshots/screenshot_HomePage_Category_HandTools.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_HomePage_Category_HandTools, contentType: 'image/png' });

});

test("HomePage_Category_PowerTools",async({page},testInfo)=>{
await page.goto('https://practicesoftwaretesting.com/');
await page.locator('[data-test="nav-categories"]').click();
await page.locator('[data-test="nav-power-tools"]').click();
     
const screenshot_HomePage_Category_PowerTools=await page.screenshot({ path: 'screenshots/screenshot_HomePage_Category_PowerTools.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_HomePage_Category_PowerTools, contentType: 'image/png' });

});
    
    
    

test("HomePage_Category_SpecialTools",async({page},testInfo)=>{


await page.goto('https://practicesoftwaretesting.com/');
await page.locator('[data-test="nav-categories"]').click();
await page.locator('[data-test="nav-special-tools"]').click();



     
const screenshot_HomePage_Category_SpecialTools=await page.screenshot({ path: 'screenshots/screenshot_HomePage_Category_SpecialTools.png', fullPage: true });
await testInfo.attach('screenshot', { body: screenshot_HomePage_Category_SpecialTools, contentType: 'image/png' });
    
});